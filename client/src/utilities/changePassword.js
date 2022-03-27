import getHeaderToken from "./getHeadertoken"
export default changePassword = async (data) => {
    const config = getHeaderToken()
    try {
      await axios.post(`${api}/users/reset-password`,data, config)
      alert ("Password changed")
    } catch (error) {
      console.log(error.response.data)
      alert ("password is wrong")
    }
  }