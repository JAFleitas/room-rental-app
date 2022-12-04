/* eslint-disable no-unused-vars */
require("dotenv").config()
const { Sequelize, Op } = require("sequelize")

const fs = require("fs")
const path = require("path")

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

/* eslint-disable */
const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: DB_PORT || 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        },
      )


const basename = path.basename(__filename)

const modelDefiners = []

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    file =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js",
  )
  .forEach(file => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)))
  })

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize))
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models)
let capsEntries = entries.map(entry => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
])
sequelize.models = Object.fromEntries(capsEntries)

// DEFINIR LA FUNCION ASSOCIATE QUE RECIBE MODELS PARA REALIZAR LAS ASOCIACIONES ENTRA TABLAS
// para realizar las asociaciones
// console.log({ capsEntries })
let models = Object.fromEntries(capsEntries)
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

sequelize.models = models

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize, // para importart la conexión { conn } = require('./db.js');
  Op, // para poder importar los operadores tales como ilike en las consultas a la database
}
