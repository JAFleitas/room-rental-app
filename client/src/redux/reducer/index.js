import { GET_ALL_PROPERTIES, GET_PROPERTY_BY_ID } from "../actions"

const initialState = {
  AllProperties: [],
  propertys2: [],
  detailsOfProperty: {},
}

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_PROPERTIES:
      return {
        ...state,
        AllProperties: payload,
      }
    case GET_PROPERTY_BY_ID:
      return {
        ...state,
        detailsOfProperty: payload,
      }
    default:
      return state
  }
}

export default rootReducer
