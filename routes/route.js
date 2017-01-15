var express=require("express");
var router=express.Router();
var multer=require("multer");
var user=require("../controller/controller");
//routes
router.get("/getall/",user.getAll);
router.post("/createProfile/",user.create);
module.exports=router;