var mongoose=require('mongoose');
var NewUser = mongoose.model('User')
//console.log(NewUser)

module.exports=(function(req,res){
	//returns an object with property of login, which is a function
	return{
		index: function(req,res){
			NewUser.find({},function(err,user){
				res.render('login')
				//console.log(err)
			})
			
		},
		add: function(req,res){
			console.log(`reqbody: ${req.body.user_name}`)
			var user = new NewUser(req.body)
			//console.log(user)
			user.save(function(err){
				if(err){
					console.log('error')
				}
			})
			res.render('userlist',{user: user})
		}
	}
})()

// function sessionController(){
// 	this.index = function(req, res){
// 		res.render('login')
// 	}
// }

// module.exports = new sessionController //the new keyword creates and returns an object