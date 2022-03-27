const { Comment, User, Property } = require("../db/index.js")

const getAllCommentsByProperty = async (req, res, next) => {
  try {
    const { propertyId } = req.params

    const comments = await Comment.findAll({
      attributes: { exclude: ["propertyId, userId"] },
      where: { propertyId },
      include: {
        model: User,
        attributes: ["name", "lastname"],
        through: {
          attributes: [],
        },
      },
    })

    res.json(comments)
  } catch (error) {
    // console.log(error)
    next(error)
  }
}

const getAllCommentsByUser = async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    const comments = await Comment.findAll({
      attributes: { exclude: ["propertyId, userId"] },
      where: { userId },
      include: {
        model: User,
        attributes: ["name", "lastname"],
        through: {
          attributes: [],
        },
      },
    })

    res.json(comments)
  } catch (error) {
    // console.log(error)
    next(error)
  }
}

const createComment = async (req, res, next) => {
  const userId = req.user.id
  const { propertyId, rating, message } = req.body

  try {
    if (!message || !rating || !propertyId) {
      return next({ status: 400, message: "All fields are required" })
    }
    const property = await Property.findOne({ where: { id: propertyId } })

    if (!property) {
      return next({ status: 404, message: "Property not founded" })
    }

    const comments = await Comment.findAll({
      where: { userId, propertyId },
    })

    if (comments.length > 0) {
      return res
        .status(400)
        .json({ message: "Each user can leave only one comment on a property" })
    }

    const creationDate = new Date().toLocaleDateString()

    try {
      const comment = await Comment.create({
        rating,
        message,
        creationDate,
        propertyId,
        userId,
      })

      const {
        dataValues: { rating: currentRating, countReviews },
      } = property

      const newRating =
        countReviews === 0
          ? rating
          : (currentRating * countReviews + Number(rating)) / countReviews + 1
      // console.log({ currentRating, countReviews, rating, newRating })
      await Property.update(
        {
          rating: newRating,
          countReviews: countReviews + 1,
        },
        { where: { id: propertyId } },
      )

      res.status(201).json(comment)
    } catch (error) {
      next(error)
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const updateComment = async (req, res, next) => {
  const { message, rating } = req.body
  const { id } = req.params

  if (!message && !rating) {
    return next({ status: 400, message: "Some field is required" })
  }

  try {
    let newFields = {}

    if (message) newFields.message = message
    if (rating) newFields.rating = rating

    await Comment.update(newFields, { where: { id } })

    res.end()
  } catch (error) {
    next(error)
  }
}

const deleteComment = async (req, res, next) => {
  const { id } = req.params

  try {
    await Comment.destroy({ where: { id } })

    res.end()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllCommentsByProperty,
  getAllCommentsByUser,
  createComment,
  updateComment,
  deleteComment,
}
