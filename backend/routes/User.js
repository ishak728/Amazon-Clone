
const express=require("express") 

const router= express.Router()

const {createUser,verifyEmail,signIn,verifyToken,addAdress,getAddresses}=require("../controllers/User")



router.post("/create",createUser)
router.get("/verify/:token",verifyEmail)
router.post("/signin",signIn)
router.get("/verify-token/:token",verifyToken)
router.post("/add-address",addAdress)
router.get("/get-addresses/:id",getAddresses)


module.exports=router











