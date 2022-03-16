const app = require("./app")
const { sequelize } = require("./db/index.js")

const { PORT } = process.env
// Syncing all the models at once.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, async () => {
    console.log(`%s listening at ${PORT}`) // eslint-disable-line no-console
  })
})
