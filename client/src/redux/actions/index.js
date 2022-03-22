import axios from "axios"
import getPropertyById from "../../utilities/getPropertyById"

export const LOG_IN = "LOG_IN"
export const GET_PROPERTY_BY_ID = "GET_PROPERTY_BY_ID"
export const GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES"
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
export const GET_ALL_SERVICES = "GET_ALL_SERVICES"
export const POST_NEW_USER = "POST_NEW_USER"
export const SEARCH_PROPERTY = "SEARCH_PROPERTY"
export const SET_OPTION_FILTERS = "SET_OPTION_FILTERS"

const api = import.meta.env.VITE_APP_API_URL

export function setOptionFilters(newOptions) {
  console.log(newOptions)
  return { type: SET_OPTION_FILTERS, payload: newOptions }
}

export function getAllCategories(){
  return async function (dispatch) {
    try {
      let response = await axios.get(`${api}/categories/getAllCategories`)
      console.log(response)
      return dispatch({
        type: GET_ALL_CATEGORIES,
        payload: response.data,
      })
    } catch (error) {
      console.log(error.response)
    }
  }
} 

export function getAllServices(){
  return async function (dispatch) {
    try {
      let response = await axios.get(`${api}/services/getAllServices`)
      console.log(response)
      return dispatch({
        type: GET_ALL_SERVICES,
        payload: response.data,
      })
    } catch (error) {
      console.log(error.response)
    }
  }
} 

export function getAllProperties(filters) {
  let queries = ""
  console.log(filters)
  if (filters) {
    let filtersQueries = []

    filtersQueries = Object.getOwnPropertyNames(filters)
    console.log({ filtersQueries })
    if (filtersQueries.services)
      filtersQueries.services = filtersQueries.services.join("%20")
    console.log("cambio")
    console.log({ filtersQueries })
    filtersQueries = filtersQueries.map(query =>
      filters[query]
        ? query === "services"
          ? ` ${query}=${filters[query].join("%20")}`
          : `${query}=${filters[query]}`
        : null,
    )
    filtersQueries = filtersQueries.filter(exists => exists)
    queries = filtersQueries.join("&")
    console.log({ filtersQueries })
  }
  return async function (dispatch) {
    let response = await axios.get(
      queries
        ? `${api}/properties/getProperties?${queries}`
        : `${api}/properties/getProperties`,
    )
    return dispatch({
      type: GET_ALL_PROPERTIES,
      payload: response.data,
    })
  }
}

export function actionGetPropertyById(id) {
  return async dispatch => {
    const response = await getPropertyById(id)
    return dispatch({
      type: GET_PROPERTY_BY_ID,
      payload: response[0],
    })
  }
}

export function logIn(data) {
  return async function (dispatch) {
    let response = await axios.post(`${api}/users/login`, data)
    return dispatch({
      type: LOG_IN,
      payload: response.data,
    })
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
    let response = await axios.post(`${api}/users/register`, {
      name,
      lastname,
      country,
      email,
      city,
      password,
    })
    return dispatch({
      type: POST_NEW_USER,
      payload: response.data,
    })
  }
}
