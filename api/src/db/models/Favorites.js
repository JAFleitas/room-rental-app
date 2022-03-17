
module.exports = sequelize => {
  // defino el modelo
  const Favorite = sequelize.define(
    "Favorite",
    {
    },
    { timestamps: false },
  )

  Favorite.associate = models => {
    // Relacionando con Usuario   (1:1)
    Favorite.belongsTo(models.User, {
      sourceKey: "id",
      foreignKey: "userId",
    })
    
    // Relacionando con FavoriteProperty  (1:m)
    Favorite.hasMany(models.FavoriteProperty, {
      sourceKey: "id",
      foreignKey: "favoriteId",
    })
  }
}
