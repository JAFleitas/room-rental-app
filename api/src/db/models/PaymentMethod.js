const { DataTypes } = require("sequelize")

module.exports = sequelize => {
  // defino el modelo
  const PaymentMethod = sequelize.define("PaymentMethod", {
    // number: {
    //   // type: DataTypes.
    // }
  }, { timestamps: false })

  PaymentMethod.associate = models => {
    // Relacionando con un Usuario   (1:1)
    PaymentMethod.belongsTo(models.User, {
      sourceKey: "id",
      foreignKey: "userId",
    })
  }
}
