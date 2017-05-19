var mongoose = require('mongoose')
var Schema=mongoose.Schema
var NewUser = new Schema({
	//name:{type: String, maxlength: 199, minlength:2,required:true},
	//age:{type:Number,required:false}
	user_name:String,
	age:Number
	
},{timestamps:true})
mongoose.model('User', NewUser)