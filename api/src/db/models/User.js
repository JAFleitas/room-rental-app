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
      provider: {
        type: DataTypes.STRING,
      },
      providerId: {
        type: DataTypes.STRING,
        unique: true,
      },
      photo: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue("password", hashSync(value, 10))
        },
      },
      account_number: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.ENUM("enabled", "disabled"),
        allowNull: false,
        defaultValue: "enabled",
      },
      type: {
        type: DataTypes.ENUM("NORMAL", "ADMIN", "SUBADMIN"),
        allowNull: false,
        defaultValue: "NORMAL",
      },
    },
    { timestamps: false },
  )
}
