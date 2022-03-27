import getHeaderToken from "./getHeadertoken"
export const sendRental = async (data) => {
    const config = getHeaderToken()
    try {
      await axios.post(`${api}/rentals/addRental`,data, config)
      alert ("Confirmed")
    } catch (error) {
      console.log(error.response.data)
      alert ("opss, try again")
    }
  }