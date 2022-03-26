const { DataTypes } = require("sequelize")
const CryptoJS = require("crypto-js")
const { ENCRIPTION_KEY } = process.env;

module.exports = sequelize => {
  // defino el modelo
  const PaymentMethod = sequelize.define(
    "PaymentMethod",
    {
      cardNumber: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
        // validate: {
        //   isCreditCard: true,
        // },
        get() {},
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
      lastNumbers: {
        type: DataTypes.STRING,
        required: true,
        validate: {
          len: [4, 4],
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
      ccv: {
        type: DataTypes.STRING,
        required: true,
        set(value) {
          let encriptedValue = CryptoJS.AES.encrypt(value, ENCRIPTION_KEY)
          // console.log(encriptedValue)
          this.setDataValue("ccv", encriptedValue.toString())
        },
        get() {},
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        required: true,
      },
    },
    { timestamps: false },
  )

  PaymentMethod.associate = models => {
    // Relacionando con un Usuario   (1:1)
    PaymentMethod.belongsTo(models.User, {
      sourceKey: "id",
      foreignKey: "userId",
    })
  }
}
