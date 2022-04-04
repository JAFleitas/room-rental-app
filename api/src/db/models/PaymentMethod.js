const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  // defino el modelo
  sequelize.define(
    "PaymentMethod",
    {
      cardNumber: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
      },
      type: {
        type: DataTypes.ENUM("VISA", "MASTERCARD"),
        required: true,
      },
      fullName: {
        type: DataTypes.STRING,
        required: true,
        validate: {
          len: [8, 50],
        }
      },
      expirationMonth: {
        type: DataTypes.INTEGER,
        required: true,
        validate: {
          min: 1,
          max: 12,
        }
      },
      expirationYear: {
        type: DataTypes.INTEGER,
        required: true,
        validate: {
          min: new Date().getFullYear() - 2000,
          max: new Date().getFullYear() + 6 - 2000,
        }
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        required: true,
      },
    },
    { timestamps: false },
  )

}
