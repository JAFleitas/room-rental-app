
module.exports = sequelize => {
  // defino el modelo
  const FavoriteProperty = sequelize.define(
    "FavoriteProperty",
    {
    },
    { timestamps: false },
  )

  FavoriteProperty.associate = models => {
    // Relacionando con Producto  (1:1)
    FavoriteProperty.belongsTo(models.Property, {
      sourceKey: "id",
      foreignKey: "propertyId",
    })
  };
}
