// @desc Genera un string aleatorio de 12 a 13 caracteres
const generateRandomString = () => {
  let randomNumber = Math.round(Math.random() * (10 ** 20))

  return randomNumber.toString(36)
}

module.exports = generateRandomString
