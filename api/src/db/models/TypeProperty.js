const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  sequelize.define(
    "type_property",
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
    },
    { timestamps: false },
  )
}
