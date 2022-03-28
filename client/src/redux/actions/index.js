import axios from "axios"

import getHeaderToken from "../../utilities/getHeadertoken"

export const LOG_IN = "LOG_IN"
export const LOGOUT = "LOGOUT"
export const USER_LOADED = "USER_LOADED"
export const CHANGE_PASSWORD = "CHANGE_PASSWORD"
export const AUTH_ERROR = "AUTH_ERROR"
export const ADD_PROPERTY = "ADD_PROPERTY"
export const GET_PROPERTY_BY_ID = "GET_PROPERTY_BY_ID"
export const GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES"
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
export const GET_ALL_SERVICES = "GET_ALL_SERVICES"
export const GET_PROPERTY = "GET_PROPERTY"
export const ADD_RENTAL = "ADD_RENTAL"
export const GET_RENTAL = "GET_RENTAL"

export const GET_ALL_PAYMENT_METHODS = "GET_ALL_PAYMENT_METHODS"
export const ADD_PAYMENT_METHOD = "ADD_PAYMENT_METHOD"
export const EDIT_PAYMENT_METHOD = "EDIT_PAYMENT_METHOD"
export const DELETE_PAYMENT_METHOD = "DELETE_PAYMENT_METHOD"

export const POST_NEW_USER = "POST_NEW_USER"
export const SEARCH_PROPERTY = "SEARCH_PROPERTY"
export const SET_OPTION_FILTERS = "SET_OPTION_FILTERS"
export const SET_COORDINATES = "SET_COORDINATES"

export const ADD_FAVORITE = "ADD_FAVORITE"
export const GET_LIST_FAVORITES = "GET_LIST_FAVORITES"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const GET_PROPERTIES_BY_USER_ID = "GET_PROPERTIES_BY_USER_ID"
export const DELETE_PROPERTY_FROM_MY_PROPERTIES =
  "DELETE_PROPERTY_FROM_MY_PROPERTIES"

const api = import.meta.env.VITE_APP_API_URL

export function getAllPaymentMethod() {
  return async function (dispatch) {
    try {
      let { data } = await axios.get(`${api}/payment-method`, getHeaderToken())
      // console.log(data)
      return dispatch({
        type: GET_ALL_PAYMENT_METHODS,
        payload: data,
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export function addPaymentMethod(newMethod) {
  return { type: ADD_PAYMENT_METHOD, payload: newMethod }
}

export function deletePaymentMethod(id) {
  return { type: DELETE_PAYMENT_METHOD, payload: id }
}

export function editPaymentMethod(editMethod) {
  return { type: EDIT_PAYMENT_METHOD, payload: editMethod }
}

export function getFavorites() {
  return async function (dispatch) {
    try {
      let response = await axios.get(
        `${api}/favorites/user-favorites`,
        getHeaderToken(),
      )
      // console.log(response)
      return dispatch({
        type: GET_LIST_FAVORITES,
        payload: response.data,
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export function addFavorite(idProperty, idListFavorites) {
  return async function (dispatch) {
    try {
      await axios.put(
        `${api}/favorites/add/${idListFavorites}`,
        { property: idProperty },
        getHeaderToken(),
      )
      // console.log(response)
      return dispatch({
        type: ADD_FAVORITE,
        payload: { propertyId: idProperty },
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export function removeFavorite(idProperty, idListFavorites) {
  return async function (dispatch) {
    try {
      await axios.put(
        `${api}/favorites/remove/${idListFavorites}`,
        { property: idProperty },
        getHeaderToken(),
      )
      // console.log(response)
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: idProperty,
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export function setOptionFilters(newOptions) {
  // console.log(newOptions)
  return { type: SET_OPTION_FILTERS, payload: newOptions }
}

export function getAllCategories() {
  return async function (dispatch) {
    try {
      let response = await axios.get(`${api}/categories/getAllCategories`)
      // console.log(response)
      return dispatch({
        type: GET_ALL_CATEGORIES,
        payload: response.data,
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export function getAllServices() {
  return async function (dispatch) {
    try {
      let response = await axios.get(`${api}/services/getAllServices`)
      // console.log(response)
      return dispatch({
        type: GET_ALL_SERVICES,
        payload: response.data,
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export function getAllProperties(filters, page = 1) {
  let queries = ""
  // console.log(filters)
  if (filters) {
    let filtersQueries = []

    filtersQueries = Object.getOwnPropertyNames(filters)
    // console.log({ filtersQueries })
    if (filtersQueries.services)
      filtersQueries.services = filtersQueries.services.join("%20")
    // console.log("cambio")
    // console.log({ filtersQueries })
    filtersQueries = filtersQueries.map(query =>
      filters[query]
        ? query === "services"
          ? ` ${query}=${filters[query].join("%20")}`
          : `${query}=${filters[query]}`
        : null,
    )
    filtersQueries = filtersQueries.filter(exists => exists)
    queries = filtersQueries.join("&")
    // console.log({ filtersQueries })
  }
  return async function (dispatch) {
    let response = await axios.get(
      queries
        ? `${api}/properties/getProperties?${queries}&page=${page}`
        : `${api}/properties/getProperties?page=${page}`,
    )
    return dispatch({
      type: GET_ALL_PROPERTIES,
      payload: response.data,
    })
  }
}

export function getPropertyById(id) {
  return async dispatch => {
    const response = await axios.get(`${api}/properties/getPropertyById/${id}`)
    return dispatch({
      type: GET_PROPERTY_BY_ID,
      payload: response.data,
    })
  }
}

export const addProperty = data => async dispatch => {
  try {
    const res = await axios.post(`${api}/properties/addProperty`, data)
    dispatch({
      type: ADD_PROPERTY,
      payload: res.data,
    })
  } catch (error) {
    console.log(error.response)
  }
}
export const loadUser = () => async dispatch => {
  const config = getHeaderToken()
  try {
    const res = await axios.get(`${api}/users`, config)
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
  } catch (error) {
    console.log(error.response)
    dispatch({
      type: AUTH_ERROR,
    })
  }
}
export const deleteUser = id => async dispatch => {
  const config = getHeaderToken()
  try {
    const res = await axios.put(`${api}/users/disableUser`, id, config)
    dispatch({
      type: LOGOUT,
      payload: res.data,
    })
  } catch (error) {
    console.log(error.response)
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

export const changePassword = data => async dispatch => {
  const config = getHeaderToken()
  try {
    const res = await axios.put(`${api}/users/reset-password`, data, config)
    dispatch({
      type: CHANGE_PASSWORD,
      payload: res.data,
    })
    alert("Password changed")
  } catch (error) {
    console.log(error.response.data)
    alert("password is wrong")
  }
}

export const logIn = data => async dispatch => {
  try {
    // Response
    const response = await axios.post(`${api}/users/login`, data)
    // console.log(res.data.token);

    dispatch({
      type: LOG_IN,
      payload: response.data.token,
    })
    dispatch(loadUser())
  } catch (err) {
    console.log(err.response)
    alert("no se pudo loguear correctamente")
  }
}

export function postNewUser({
  name,
  lastname,
  country,
  email,
  city,
  password,
}) {
  return async function (dispatch) {
    try {
      let response = await axios.post(`${api}/users/register`, {
        name,
        lastname,
        country,
        email,
        city,
        password,
      })
      dispatch({
        type: POST_NEW_USER,
        payload: response.data.token,
      })
      dispatch(loadUser())
    } catch (error) {
      console.log(error.response)
      alert("no se pudo crear el usuario")
    }
  }
}

export const CHANGE_PAGE = "CHANGE_PAGE"

export function actionChangePage(payload) {
  return {
    type: CHANGE_PAGE,
    payload,
  }
}

export function actionSetCoordinates(payload) {
  return {
    type: SET_COORDINATES,
    payload,
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export function addRental(form) {
  return async function (dispatch) {
    const config = getHeaderToken()
    try {
      let response = await axios.post(`${api}/rentals/addRental`, form, config)
      dispatch({
        type: ADD_RENTAL,
        payload: response.data,
      })
    } catch (error) {
      alert(
        (typeof error?.response?.data === "string"
          ? error.response.data
          : error.response.data?.message) || "Something went wrong :(",
      )
      console.log(error.response.data)
    }
  }
}

export function getPropertiesByUserId() {
  return async function (dispatch) {
    const config = getHeaderToken()
    try {
      let response = await axios.get(
        `${api}/properties/getPropertiesByUserId`,
        config,
      )
      console.log(response.data)
      return dispatch({
        type: GET_PROPERTIES_BY_USER_ID,
                payload: response.data,
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export const getRental= propertyID => async dispatch =>{
    try {
      let response = await axios.post(`${api}/rentals/getRental`,propertyID)
      dispatch({
        type: GET_RENTAL,

        payload: response.data,
      })
    } catch (error) {
      console.log(error.response)
    }
  }


export function deletePropertyFromMyProperties(form) {
  return async function (dispatch) {
    const config = getHeaderToken()
    try {
      let response = await axios.delete(`${api}/properties/deleteProperty`, {
        headers: {
          Authorization: config.headers.Authorization,
        },
        data: {
          form: form,
        },
      })
      return dispatch({
        type: DELETE_PROPERTY_FROM_MY_PROPERTIES,
        payload: response.data,
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

