const { DataTypes } = require("sequelize")
const { hashSync } = require("bcrypt")

module.exports = sequelize => {
  const User = sequelize.define("user", {
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
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
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
      allowNull: false,
      defaultValue:
        "https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      set(value) {
        this.setDataValue("password", hashSync(value, 10))
      },
      get() {},
    },
    account_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
  })

  User.associate = models => {
    // Relacionando con la lista de favoritos 1:1
    User.hasOne(models.Favorite)

    User.hasMany(models.PaymentMethod, {
      sourceKey: "id",
      foreignKey: "userId",
    })
  }
}
