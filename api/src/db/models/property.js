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
        set(value) {
          this.setDataValue("rating", Math.round(value * 100) / 100)
        },
      },
      countReviews: {
        type: DataTypes.INTEGER,
        required: true,
        defaultValue: 0,
        validate: {
          min: 0,
        },
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      coordinates: {
        type: DataTypes.ARRAY(DataTypes.DOUBLE),
        allowNull: false,
      },
      // floor: {
      //   type: DataTypes.ARRAY(DataTypes.STRING),
      // },
      discount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.ENUM("enabled", "disabled"),
        allowNull: false,
        defaultValue: "enabled",
      },
    },
    { timestamps: false },
  )

  Property.associate = models => {
    // Relacionando Propiedad y Usuario
    Property.belongsTo(models.User, {
      sourceKey: "id",
      foreignKey: "userID",
      required: true,
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

    Property.hasMany(models.Comment, {
      sourceKey: "id",
      foreignKey: "propertyId",
    })

    //  Relacionando Propiedad con PropertyRental (m:m)
    Property.hasMany(models.PropertyRental, {
      sourceKey: "id",
      foreignKey: "propertyID",
    })

    // Relacionando Propiedad y User
    Property.belongsTo(models.User, {
      sourceKey: "id",
      foreignKey: "userID",
    })
  }
}
