const {test2}=require("../productProvider/provider")
const express=require("express")
const router=express.Router()
router.route("/test2").get(test2)


module.exports=router