const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  sequelize.define(
    "property",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allownNull: false,
      },
      location: {
        type: DataTypes.TEXT,
        allownNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allownNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allownNull: false,
      },
      numberOfRooms: {
        type: DataTypes.INTEGER,
        allownNull: false,
      },
      maxNumberOfPeople: {
        type: DataTypes.INTEGER,
        allownNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allownNull: false,
      },
      rating: {
        type: DataTypes.DOUBLE,
        allownNull: false,
      },
      numberOfReviews: {
        type: DataTypes.TEXT,
        allownNull: false,
      },
      userID: {
        type: DataTypes.UUID,
        allownNull: false,
      },
    },
    { timestamps: false },
  )
}
