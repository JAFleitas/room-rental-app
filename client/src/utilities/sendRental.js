import { toast } from "react-toastify"
import getHeaderToken from "./getHeadertoken"
export const sendRental = async (data) => {
    const config = getHeaderToken()
    try {
      await axios.post(`${api}/rentals/addRental`,data, config)
      toast.info ("Confirmed")
    } catch (error) {
      console.log(error.response.data)
      toast.error ("opss, try again")
    }
  }