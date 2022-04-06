import { toast } from "react-toastify"
import { ErrorAlert, SuccessAlert } from "./alerts"
import getHeaderToken from "./getHeadertoken"
export const sendRental = async (data) => {
    const config = getHeaderToken()
    try {
      await axios.post(`${api}/rentals/addRental`,data, config)
      SuccessAlert ("Confirmed")
    } catch (error) {
      console.log(error.response.data)
      ErrorAlert ("opss, try again")
    }
  }