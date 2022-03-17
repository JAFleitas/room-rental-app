const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  sequelize.define(
    "property_services",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      propertyID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      allows_pets: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      swimming_pool: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      private_swimming_pool: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      parking: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      jacuzzi: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      garden: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      grill: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      accept_smokers: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      elevator: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      beach_acces: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false },
  )
}
