const { User, Order, PropertyRental } = require ("../db/index.js")

const addOrder = async (req, res) => {
    try{
        const { id, userID, propertyRentalId, paymentMethodId } = req.body;
        const newOrder = await Order.create({
            id,
            userID,
            propertyRentalId,
            paymentMethodId,
        })
        if (newOrder) res.json({ message: "creado", data: newOrder });
        else res.json({ message: " no se pudo crear" });
    } catch (e) {
        res.send(e);
    } 
};

const getOrderById = async (req, res, next) => {
    const id = req.params.id;
    try{
        const order = await Order.findByPk(id)
        const user = await User.findByPk(order.dataValues.userID)
        const property = await PropertyRental.findByPk(order.dataValues.propertyRentalId)
         res.json ({
            customerName: user.dataValues.name,
            customerLastname: user.dataValues.lastname,
            propertyName: user.dataValues.country,
            email: user.dataValues.email,
            accountNumber: user.dataValues.account_number,
            propertyLocation: property.dataValues.location,
            final_price: property.dataValues.final_price,
            start_date: property.dataValues.start_date,
            final_date: property.dataValues.final_date,
            status: property.status,
            discount: property.discount,
            paymenthMethodId: user.dataValues.paymenthMethodId,
        })
    } catch (error){
        console.log(error);
        next (error)
    }
}

module.exports = {
    getOrderById,
    addOrder,
}