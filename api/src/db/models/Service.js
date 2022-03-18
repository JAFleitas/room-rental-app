const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  const Service = sequelize.define(
    "service",
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

  Service.associate = (models) => {
    Service.belongsToMany(models.Property, {
      through: "PropertyServices",
      timestamps: false,
    })
  }
}
