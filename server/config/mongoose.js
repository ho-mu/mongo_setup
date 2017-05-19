var mongoose = require('mongoose') //
var path = require('path')
var fs = require('fs')
var models_path = path.join(__dirname + './../model')

mongoose.connect('mongodb://localhost/userdb') //if one doesn't exist, it creates one

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>=0){
		require(models_path + '/' + file)
	}
})

var mongoose = require('mongoose')
var path= require('path')
var fs=require('fs')
var models_path=path.join(__dirname+'./../model')

var mongoose=require('mongoose')
var path = require('path')
var fs = require('fs')
var models_path = path.join(__dirname+'./../model')
