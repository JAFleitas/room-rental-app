const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  sequelize.define(
    "property_rental",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      userID: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      porpertyID: {
        type: DataTypes.UUID,
        allowNull: false,
      },
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
      flat: {
        type: DataTypes.INTEGER,
      },
      discount: {
        type: DataTypes.INTEGER,
      },
      discount_price: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false },
  )
}
