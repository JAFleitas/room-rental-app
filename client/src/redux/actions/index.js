import axios from "axios"
import getPropertyById from "../../utilities/getPropertyById"
import getHeaderToken from "../../utilities/getHeadertoken"

export const LOG_IN = "LOG_IN"
export const USER_LOADED = "USER_LOADED"
export const AUTH_ERROR = "AUTH_ERROR"
export const ADD_PROPERTY = "ADD_PROPERTY"

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


export const addProperty = (data) => async dispatch => {
  try {
    const res = await axios.post(`${api}/properties/addProperty`, data )
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
      console.log(err.response)
      alert("no se pudo crear el usuario")
    }
  }
}
