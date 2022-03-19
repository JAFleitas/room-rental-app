import axios from "axios"
import getPropertyById from "../../utilities/getPropertyById"

export const GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES"
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

export const GET_PROPERTY_BY_ID = "GET_PROPERTY_BY_ID"
export function actionGetPropertyById(id) {
  return async dispatch => {
    const response = await getPropertyById(id)
    return dispatch({
      type: GET_PROPERTY_BY_ID,
      payload: response[0],
    })
  }
}
