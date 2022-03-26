const { PaymentMethod } = require("../db/index.js")

const getAllPaymentMethodsByUser = async (req, res, next) => {
  try {
    const methods = await PaymentMethod.findAll({
      attributes: {exclude: ['userId']},
      where: { userId: req.user.id },
    })

    res.json(methods)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const createPaymentMethod = async (req, res, next) => {
  const { cardNumber, fullName, expirationMonth, expirationYear, ccv } =
    req.body

  try {
    console.log(req.user);
    const methods = await PaymentMethod.findAll({
      where: { userId: req.user.id },
    })
    if (methods.length >= 3) {
      return res
        .status(400)
        .json({ message: "Each user can save just three payment methods" })
    }
  } catch (error) {
    console.log(error)
  }

  if (!cardNumber || !fullName || !expirationMonth || !expirationYear || !ccv) {
    return next({ status: 400, message: "All fields are required" })
  }

  try {
    let lastNumbers = cardNumber.substring(
      cardNumber.length - 4,
      cardNumber.length,
    )
    let type = cardNumber[0] === '4' ? "VISA" : "MASTERCARD"
    const paymenthMethod = await PaymentMethod.create({
      type,
      lastNumbers,
      cardNumber,
      fullName,
      expirationMonth,
      expirationYear,
      ccv,
      userId: req.user.id
    })

    res.status(201).json(paymenthMethod)
  } catch (error) {
    next(error)
  }
}

const updatePaymentMethod = async (req, res, next) => {
  const { cardNumber, fullName, expirationMonth, expirationYear, ccv } =
    req.body
  const { id } = req.params

  if (!cardNumber && !fullName && !expirationMonth && !expirationYear && !ccv) {
    return next({ status: 400, message: "Some field is required" })
  }

  try {
    let newFields = {}
    if (cardNumber) {
      newFields.lastNumbers = cardNumber.substring(
        cardNumber.length - 4,
        cardNumber.length,
      )
      newFields.type = cardNumber[0] === 4 ? "VISA" : "MASTERCARD"
    }
    if (fullName) newFields.fullName = fullName
    if (expirationMonth) newFields.expirationMonth = expirationMonth
    if (expirationYear) newFields.expirationYear = expirationYear
    if (ccv) newFields.ccv = ccv

    await PaymentMethod.update(newFields, { where: { id } })

    res.end()
  } catch (error) {
    next(error)
  }
}

const deletePaymentMethod = async (req, res, next) => {
  const { id } = req.params

  try {
    await PaymentMethod.destroy({ where: { id, userId: req.user.id } })
    res.end()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
  getAllPaymentMethodsByUser,
}
