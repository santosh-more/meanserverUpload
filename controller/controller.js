var mongoose=require("mongoose");
var user={
	getAll:function(req,res)
	{
		console.log("getAll Function");
		res.status(200).json({status:200,message:"Hey this is sam"});
	},
	getOne:function(req,res){
		console.log("getOne Function");
	},
	create:function(req,res){
		console.log("create Function"+req.body.name);
		res.status(200).json({status:200,message:"Data from server",data:""});
	},
	update:function(req,res){
		console.log("update Function");
	},
	delete:function(req,res){
		console.log("delete Function");
	}
}
module.exports=user;