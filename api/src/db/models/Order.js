const { DataTypes } = require("sequelize")

module.exports = sequelize => {
    const Order = sequelize.define(
        "order",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            
        },
        { timestamps: false },
    )

    Order.associate = models => {
        Order.belongsTo(models.User,{
            sourceKey: "id",
            foreignKey: "userID",
        })

        Order.belongsTo(models.PropertyRental,{
            sourceKey: "id",
            foreignKey: "propertyRentalId",
        })

        Order.belongsTo(models.PaymentMethod,{
            sourceKey: "id",
            foreignKey: "paymentMethodId",
        })
    }
}