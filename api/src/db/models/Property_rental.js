const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  const PropertyRental = sequelize.define(
    "PropertyRental",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      final_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      paymenthMethodId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      start_date: {
        //  YYYY-MM-DD
        type: DataTypes.DATE,
        allownull: false,
      },
      final_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("active", "cancelled"),
        required: true,
        defaultValue: "active",
      },
      discount: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false },
  )

  PropertyRental.associate = models => {
    // Relacionando un 'alquiler de una propiedad' y Usuario
    PropertyRental.belongsTo(models.User, {
      sourceKey: "id",
      foreignKey: "userId",
    })
    //  Relacionando 'alquiler de una propiedad' y Propiedad
    //  Esto se usa y funciona [NO TOCAR]
    PropertyRental.belongsTo(models.Property, {
      sourceKey: "id",
      foreignKey: "propertyID",
    })
    // Relacionando 'alquiler de una propiedad' y Estado
    // PropertyRental.belongsTo(models.Rental_status, {
    //   sourceKey: "id",
    //   foreignKey: "statusID",
    // })
  }
}
