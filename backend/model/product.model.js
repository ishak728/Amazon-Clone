const mongoose = require("mongoose")


const ProductSchema = mongoose.Schema(

    {

        name: {
            type:String,
            required:true

        },

        quantity: {
            type:Number,
        
            default:0

        },

    },

    {
        timestamps: true
    }
)

const Product=mongoose.model("Product",ProductSchema)

module.exports=Product

     