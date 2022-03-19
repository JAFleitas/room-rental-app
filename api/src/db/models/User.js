const { DataTypes } = require("sequelize")
const { hashSync } = require("bcrypt")

module.exports = sequelize => {
  const User = sequelize.define(
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
        allowNull: false,
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
      },
      userType: {
        type: DataTypes.ENUM("user", "subAdmin", "Admin"),
        allowNull: false,
      },
      // id_type_user: {
      //   type: DataTypes.UUID,
      //   allowNull: true,
      //   defaultValue: DataTypes.UUIDV4,
      // },
    },
    { timestamps: false },
  )

  // user_type_ID
  User.associate = models => {
    // Relacionando un User con Categoría (1:m)
    User.belongsTo(models.Type_user, {
      sourceKey: "id",
      foreignKey: "user_type_ID",
    })
  }
}
