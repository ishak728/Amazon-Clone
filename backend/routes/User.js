
const express=require("express") 

const router= express.Router()

const {createUser,verifyEmail,signIn,verifyToken}=require("../controllers/User")



router.post("/create",createUser)
router.get("/verify/:token",verifyEmail)
router.post("/signin",signIn)
router.get("/verify-token/:token",verifyToken)


module.exports=router











