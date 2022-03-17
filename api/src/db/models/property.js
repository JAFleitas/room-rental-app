const { DataTypes } = require("sequelize")

module.exports = sequelize => {

  const Property = sequelize.define(
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
        allowNull: false,
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      numberOfRooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxNumberOfPeople: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },
      userID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      coordinates: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      flat: {
        type: DataTypes.INTEGER,
      },
      discount: {
        type: DataTypes.INTEGER,
      },
      wifi: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      air_conditioning: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      id_service: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      id_type_property: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    },
    { timestamps: false },
  )

  Property.associate = models => {
   // Relacionando Propiedad y Usuario
   Property.belongsTo(models.User, {
     sourceKey: "id",
     foreignKey: "userID",
   })
 }
}
