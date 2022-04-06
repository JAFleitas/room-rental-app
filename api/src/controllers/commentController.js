const { Comment, User, Property } = require("../db/index.js")
const { Op } = require("sequelize")

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
    const { id: userId } = req.user

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

  if (userId) {
    if (!message || !rating || !propertyId) {
      return send({ status: 400, message: "All fields are required" })
    } else {
      try {
        const creationDate = new Date().toLocaleDateString()

        const [comment, created] = await Comment.findOrCreate({
          where: { userId, propertyId },
          defaults: {
            rating,
            message,
            creationDate,
          },
        })

        if (!created) {
          return res.status(400).json({
            message: "Each user can leave only one comment on a property",
          })
        }

        let comments = await Comment.findAll({
          where: { propertyId },
          attributes: ["rating"],
        })

        let SumaRating = 0

        comments.map(comen => {
          SumaRating += comen.rating
        })
        await Property.update(
          {
            rating: SumaRating / comments.length,
            countReviews: comments.length,
          },
          { where: { id: propertyId } },
        )
        res.send("Comment created").status(201)
      } catch (error) {
        console.log(error)
      }
    }
  } else {
    console.log("Not found Token")
  }
}

const updateComment = async (req, res, next) => {
  const { message, rating } = req.body
  const { id } = req.params

  if (!message && !rating) {
    return next({ status: 400, message: "Some field is required" })
  }

  try {
    const newFields = {}

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
