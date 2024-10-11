const Order = require("../model/Order")
const User = require("../model/User")


const createOrder = async (req, res) => {
    const { userId, products, totalPrice, shippingAddress } = req.body

    try {

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json("User doesn't exist.")
        }

        const order = new Order({
            user: userId,
            products: products,
            totalPrice: totalPrice,
            shippingAddress: shippingAddress
        })

        await order.save()

        res.status(201).json({ message: "Order Created successfully" })


    } catch (error) {
        res.status(500).json({ message: error })
    }

}

const getOrders = async (req,res) => {
    const userId = req.params.userid
console.log(1)
    try {
        const orders = await Order.find({ user: userId })
        console.log("orders:::",orders)

        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: "No orders found for this user" })
        }

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = { createOrder, getOrders }