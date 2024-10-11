
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const cors = require("cors")
const Product = require('./model/product.model')
const productRoute = require("./routes/product.route.js")
const userRoute=require("./routes/User.js")
const orderRoute=require("./routes/Order.js")
const User = require("./model/User.js")

const app = express()//http://192.168.1.144:3000
const PORT = 3000
app.use(bodyParser.json())
app.use(cors())
//middleware
app.use(express.json())

//routes
app.use("/api/products", productRoute)

app.use("/user",userRoute)
app.use("/order",orderRoute)


mongoose.connect(process.env.MONGO_CONNECTION_STRING)

    .then(() => {
        console.log('Connected to database')

        app.listen(3000, () => {
            console.log("server is working")
        })
    })
    .catch(() => console.log('Not Connected to database'))








 
