var mongoose=require("mongoose");
var profileSchema=new mongoose.Schema({
	name:{type:String,unique:true,index:true},
	email:String,
	address:String,
	zip:Number,
	gender:String,
	hobbies:String,
	dob:Date,
	imageName:String
});
Profiles=mongoose.model("Profile",profileSchema);
console.log("Profiles Schema is initialized");
module.exports=Profiles;