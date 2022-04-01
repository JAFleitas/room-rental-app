const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  // defino el modelo
  sequelize.define(
    "Notification",
    {
      subject: {
        type: DataTypes.STRING,
        required: true,
      },
      title: {
        type: DataTypes.STRING,
        required: true,
      },
      message: {
        type: DataTypes.STRING(1500),
        retuired: true,
      },
      segment: {
        type: DataTypes.ENUM("all", "blocked", "disabled", "hosts", "guests"),
        required: true,
      },
      image: {
        type: DataTypes.STRING(700),
        required: true,
        validate: {
          isURL: true,
        }
      },
      count: {
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false,
        validate: {
          min: 0,
        }
      }
    },
    { timestamps: true },
  )
}
