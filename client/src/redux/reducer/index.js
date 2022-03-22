import {
  GET_ALL_PROPERTIES,
  GET_PROPERTY_BY_ID,
  POST_NEW_USER,
  LOG_IN
} from "../actions"

const initialState = {
  AllProperties: [],
  propertys2: [],
  detailsOfProperty: {},
  user: {},
  token:{}
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
    case POST_NEW_USER:
      localStorage.setItem("tokenRentalApp", payload)
      return {
        ...state,
        token: payload,
      }
    case LOG_IN:
      localStorage.setItem("tokenRentalApp", payload)
      return{
        ...state,
        token: payload,
        
      }
    default:
      return state
  }
}

export default rootReducer
