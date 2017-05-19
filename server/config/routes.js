var session=require('./../controller/session.js')

module.exports = function(app){
	app.get('/',function(req, res){
		//res.render('login')
		session.index(req, res)
	})
	app.post('/userlist', function(req,res){
		// res.render('userlist')
		//session.login(req,res)
		session.add(req,res)
	})
}