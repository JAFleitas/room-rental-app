const { DataTypes } = require("sequelize")
const { hashSync } = require("bcrypt")

module.exports = sequelize => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue("password", hashSync(value, 10))
        },
      },
      credit_card_number: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.ENUM("online", "offline", "suspended", "banned"),
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      id_type_user: {
        type: DataTypes.UUID,
        allowNull: true,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    { timestamps: false },
  )
}
