const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  const PropertyRental = sequelize.define(
    "property_rental",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      // userID: {
      //   type: DataTypes.UUID,
      //   allowNull: false,
      // },
      // porpertyID: {
      //   type: DataTypes.UUID,
      //   allowNull: false,
      // },
      final_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      statusPropertyId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      rental_dates: {
        type: DataTypes.DATE,
        allownull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allownull: false,
      },
      final_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { timestamps: false },
  )

  PropertyRental.associate = models => {
    // Relacionando un 'alquiler de una propiedad' y Usuario
    PropertyRental.belongsTo(models.User, {
      sourceKey: "id",
      foreignKey: "userID",
    })

    // Relacionando 'alquiler de una propiedad' y Propiedad
    PropertyRental.belongsTo(models.Property, {
      sourceKey: "id",
      foreignKey: "propertyID",
    })

    // Relacionando 'alquiler de una propiedad' y Estado
    PropertyRental.belongsTo(models.Rental_status, {
      sourceKey: "id",
      foreignKey: "statusID",
    })
  }
}
