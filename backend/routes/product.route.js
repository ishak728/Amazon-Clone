 
const express=require("express")
const router=express.Router()
const {createProduct}=require("../controllers/product.controller")


router.post("/",createProduct)






module.exports=router



