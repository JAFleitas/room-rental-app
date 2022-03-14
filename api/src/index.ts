import app from "./app";
const { sequelize } = require("./db");

const PORT: number | string = process.env.PORT || 3001;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
