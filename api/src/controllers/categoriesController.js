const { Type_property } = require("../db/index.js")

const getAllCategories = async (req, res) => {
  try {
    const Categorias = await Type_property.findAll()
    res.json(Categorias)
  } catch (error) {
    console.log(error)
    res.send("Not found").status(404)
  }
}

const addCategories = async (req, res) => {
  const { name } = req.body
  try {
    const [row, created] = await Type_property.findOrCreate({ where: { name } })
    // console.log({row, created})
    if (created) {
      res.json({ message: "successfully created", data: row })
    } else {
      res.json({ message: "The category already exists" })
    }
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

module.exports = { getAllCategories, addCategories }
