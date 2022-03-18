import axios from "axios"

export const GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES"

export function getAllCountries() {
  return async function (dispatch) {
    let response = await axios.get(
      `http://localhost:3005/api/properties/getProperties`,
    )
    return dispatch({
      type: GET_ALL_PROPERTIES,
      payload: response.data,
    })
  }
}
