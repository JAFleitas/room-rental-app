import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
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
  LOGOUT,
  GET_LIST_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ADD_RENTAL,
  CHANGE_PASSWORD,
  GET_ALL_PAYMENT_METHODS,
  ADD_PAYMENT_METHOD,
  DELETE_PAYMENT_METHOD,
  EDIT_PAYMENT_METHOD,
  GET_PROPERTIES_BY_USER_ID,
  DELETE_PROPERTY_FROM_MY_PROPERTIES,
  GET_RENTAL,
  FORM_PROPERTY_RENTAL,
  GET_ALL_EMAILS,
  GET_RENTALS_BY_USER,
  CANCEL_RENTAL,
  GET_ALL_USERS,
  CREATE_ADMIN,
  ADMIN_CHANGE_ENABLE_USER,
  ADMIN_BLOCK_USER,
  GET_ALL_RENTALS,
  SAVE_DATE,
  GET_MONTHLY_INCOMES,
} from "../actions"

const initialState = {
  AllProperties: [],
  MyProperties: [],
  detailsOfProperty: {},
  user: {},
  token: {},
  auth: false,
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
    location: "",
  },
  dates: {},
  page: 1,
  categories: [],
  services: [],
  coordinates: [],
  propertyRentals: [],

  listFavorites: {},
  paymenthMethods: [],

  formRentalProperty: null,

  userRentals: [],
  listFavorites: {},
  paymenthMethods: [],
  admin: {
    emails: null,
    users: null,
    orders: null,
  },
  incomes: [],
}

function rootReducer(state = initialState, { type, payload }) {
  let newUsers, finded
  switch (type) {
    case GET_MONTHLY_INCOMES:
      return { ...state, incomes: payload }
    case CREATE_ADMIN:
    case ADMIN_CHANGE_ENABLE_USER:
    case ADMIN_BLOCK_USER:
      newUsers = state.admin.users.filter(user => user.id !== payload.id)
      finded = state.admin.users.find(user => user.id === payload.id)
      // console.log({finded, payload});
      newUsers.push({ ...finded, ...payload })
      return { ...state, admin: { ...state.admin, users: newUsers } }
    case GET_ALL_USERS:
      return { ...state, admin: { ...state.admin, users: payload } }
    case GET_ALL_EMAILS:
      return { ...state, admin: { ...state.admin, emails: payload } }
    case GET_ALL_PAYMENT_METHODS:
      return { ...state, paymenthMethods: payload }

    case ADD_PAYMENT_METHOD:
      return { ...state, paymenthMethods: [...state.paymenthMethods, payload] }
    case DELETE_PAYMENT_METHOD:
      return {
        ...state,
        paymenthMethods: state.paymenthMethods.filter(
          method => method.id !== payload,
        ),
      }
    case EDIT_PAYMENT_METHOD:
      let newMethods = state.paymenthMethods.filter(
        method => method.id + "" !== payload.id + "",
      )
      newMethods.push(payload)
      return { ...state, paymenthMethods: newMethods }
    case GET_LIST_FAVORITES:
      return { ...state, listFavorites: payload }
    case ADD_FAVORITE:
      return {
        ...state,
        listFavorites: {
          ...state.listFavorites,
          FavoriteProperties: [
            ...state.listFavorites.FavoriteProperties,
            payload,
          ],
        },
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        listFavorites: {
          ...state.listFavorites,
          FavoriteProperties: state.listFavorites.FavoriteProperties.filter(
            property => property.propertyId !== payload,
          ),
        },
      }
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
        auth: true,
      }

    case USER_LOADED:
      return {
        ...state,
        user: payload,
        auth: true,
      }
    case CHANGE_PASSWORD:
      return {
        ...state,
      }
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("tokenRentalApp")
      return {
        ...state,
        token: null,
        MyProperties: [],
        user: {},
        auth: false,
        listFavorites: {},
        paymenthMethods: [],
        admin: initialState.admin,
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
    case ADD_RENTAL:
      return {
        ...state,
      }
    case GET_PROPERTIES_BY_USER_ID:
      return {
        ...state,
        MyProperties: payload,
      }
    case DELETE_PROPERTY_FROM_MY_PROPERTIES:
      return {
        ...state,
      }
    case GET_RENTAL:
      return {
        ...state,
        propertyRentals: payload,
      }
    case GET_ALL_RENTALS:
      return {
        ...state,
        propertyRentals: payload,
      }
    case FORM_PROPERTY_RENTAL:
      return {
        ...state,
        formRentalProperty: payload,
      }
    case GET_RENTALS_BY_USER:
      return {
        ...state,
        userRentals: payload,
      }
    case CANCEL_RENTAL:
      return {
        ...state,
      }
    case SAVE_DATE:
      return {
        ...state,
        dates: payload,
      }
    default:
      return state
  }
}

// gonzalo

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}
export default persistReducer(persistConfig, rootReducer)
