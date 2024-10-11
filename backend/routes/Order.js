const express=require("express")
const router=express.Router()
const{createOrder,getOrders}=require("../controllers/Order")


router.post("/create",createOrder)
router.get("/get-orders/:userid",getOrders)


module.exports=router