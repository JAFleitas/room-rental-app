import {
  GET_ALL_PROPERTIES,
  GET_PROPERTY_BY_ID,
  POST_NEW_USER,
  LOG_IN,
  USER_LOADED,
  AUTH_ERROR,
  ADD_PROPERTY,
  SET_OPTION_FILTERS,
  GET_ALL_CATEGORIES,
  GET_ALL_SERVICES,
  CHANGE_PAGE,
  SET_COORDINATES,
} from "../actions"

const initialState = {
  AllProperties: [],
  MyProperties: [],
  detailsOfProperty: {},
  user: {},
  token: {},

  filters: {
    minrooms: "",
    maxrooms: "",
    minpeople: "",
    maxpeople: "",
    order: "ASC",
    orderBy: "name",
    minprice: "",
    maxprice: "",
    type: "", //tipo de propiedad
  },
  page: 1,
  categories: [],
  services: [],
  coordinates: [],
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
    case ADD_PROPERTY:
      return {
        ...state,
        MyProperties: [...payload],
      }
    case POST_NEW_USER:
    case LOG_IN:
      localStorage.setItem("tokenRentalApp", payload)
      return {
        ...state,
        token: payload,
      }

    case USER_LOADED:
      return {
        ...state,
        user: payload,
      }
    case AUTH_ERROR:
      localStorage.removeItem("tokenRentalApp")
      return {
        ...state,
        token: null,
        MyProperties: [],
      }
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload,
      }
    case SET_COORDINATES:
      return {
        ...state,
        coordinates: payload,
      }
    default:
      return state
  }
}

export default rootReducer
