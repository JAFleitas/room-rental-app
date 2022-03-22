const { Service } = require("../db/index.js")

const getAllServices = async (req, res) => {
  try {
    const Servicios = await Service.findAll()
    res.json(Servicios)
  } catch (error) {
    console.log(error)
    res.send("Not found").status(404)
  }
}

const addService = async (req, res) => {
  const { name } = req.body
  try {
    const [row, created] = await Service.findOrCreate({ where: { name } })
    if (created) {
      res.json({ message: "successfully created" })
    } else {
      res.json({ message: "The service already exists" })
    }
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

module.exports = { getAllServices, addService }
