import {
  GET_ALL_PROPERTIES,
  GET_PROPERTY_BY_ID,
  POST_NEW_USER,
  LOG_IN,
  SET_OPTION_FILTERS,
  GET_ALL_CATEGORIES,
  GET_ALL_SERVICES,
} from "../actions"

const initialState = {
  AllProperties: [],
  propertys2: [],
  detailsOfProperty: {},
  user: {},
  token: {},
  filters: {
    minrooms: "",
    maxrooms: "",
    minpeople: "",
    maxpeople: "",
    sort: "ASC",
    sortBy: "name",
    minprice: "",
    maxprice: "",
    type: "", //tipo de propiedad
  },
  currentPage: 1,
  categories: [],
  services: [],
}

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: payload,
      }
    case GET_ALL_SERVICES:
      return {
        ...state,
        services: payload,
      }
    case SET_OPTION_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload,
        },
      }
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
      return {
        ...state,
        token: payload,
      }
    default:
      return state
  }
}

export default rootReducer
