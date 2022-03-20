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
        defaultValue: 0,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      coordinates: {
        type: DataTypes.ARRAY(DataTypes.DOUBLE),
        allowNull: false,
      },
      flat: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      discount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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

    // Relacionando Propiedad y TypoPropiedad
    Property.belongsTo(models.Type_property, {
      sourceKey: "id",
      foreignKey: "typePropertyID",
    })

    //  Relacionando Propiedad con Servicio (m:m)
    Property.belongsToMany(models.Service, {
      through: "PropertyServices",
      timestamps: false,
    })
  }
}
