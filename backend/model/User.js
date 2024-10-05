const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationToken: String,
    addresses: [
        {
            country: String,
            fullName: String,
            phone: String,
            street: String,
            building: String,
            city: String,
            state:String,
            postalCode: String,
        }
    ],
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Order"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})




const User=mongoose.model("User",UserSchema)

module.exports=User


