import axios from "axios"
import getPropertyById from "../../utilities/getPropertyById"

export const LOG_IN = "LOG_IN" 
export const GET_PROPERTY_BY_ID = "GET_PROPERTY_BY_ID"
export const GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES"  
export const POST_NEW_USER = "POST_NEW_USER"

const api = import.meta.env.VITE_APP_API_URL
export function getAllProperties() {
  return async function (dispatch) {
    let response = await axios.get(`${api}/properties/getProperties`)
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
