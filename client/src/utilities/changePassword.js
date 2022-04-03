import { toast } from "react-toastify"
import getHeaderToken from "./getHeadertoken"
export default changePassword = async (data) => {
    const config = getHeaderToken()
    try {
      await axios.post(`${api}/users/reset-password`,data, config)
      toast.success("Password changed")
    } catch (error) {
      console.log(error.response.data)
      toast.error ("password is wrong")
    }
  }