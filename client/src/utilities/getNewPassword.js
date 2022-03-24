export default async function getNewPassword(email) {
    await axios.post(`${api}/users/newPassword`,email)
  }
  