import { toast } from "react-toastify"
import { ErrorAlert, SuccessAlert } from "./alerts"
import getHeaderToken from "./getHeadertoken"
export default changePassword = async (data) => {
    const config = getHeaderToken()
    try {
      await axios.post(`${api}/users/reset-password`,data, config)
      SuccessAlert("Password changed")
    } catch (error) {
      console.log(error.response.data)
      ErrorAlert ("password is wrong")
    }
  }