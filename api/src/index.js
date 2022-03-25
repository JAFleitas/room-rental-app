const initDB = require("./utilities/initDB")
const app = require("./app")
const { sequelize } = require("./db/index.js")
const dotenv = require("dotenv")

dotenv()

const PORT = process.env.PORT
// Syncing all the models at once.
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`) // eslint-disable-line no-console

    // Inicializamos la DDBB
    await initDB()
  })
})
