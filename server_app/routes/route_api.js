
var Test = require('./../models/model_test.js');
var User = require('./../models/model_user.js');
var Home = require('./../models/model_home.js');

module.exports = function(db,app){
	
      /*---------------*/
	 /*-Get all users-*/
	/*---------------*/	
	app.get('/users',function(req,res){
		User.get_all(db,function(err,users){
			if(err) console.log(err);
			else{
				console.log(users);
				res.send(users);
			}
		});
	});
	
      /*----------------*/
	 /*-Get user homes-*/
	/*----------------*/
	app.get('/user/homes', function(req,res){
		//User.get_homes(params);
	});
	
	  /*---------------*/
	 /*-Get user info-*/
	/*---------------*/
	app.get('/user/info/:user_id', function(req,res){
		var params = {
			user_id : req.params.user_id
		}
		console.log(params);
		User.get_info(db,params,function(err,user_doc){
			if(err) console.log(err);
			else{
				console.log(user_doc);
				res.send(user_doc);
			}
		});
	});

	  /*-------------*/
	 /*-Log-in user-*/
	/*-------------*/
	app.post('/user/login',function(req,res){
		//User.login(params);
	});
	
	  /*---------------*/
	 /*-Register user-*/
	/*---------------*/
	app.post('/user/register', function(req,res){
	    var params = {
			home_id:req.body.home_id,
			user_id:req.body.user_id,
			user_pass:req.body.user_pass
		}
		User.register(db,params,function(err,status){
			if(err) {
				console.log(err);
				res.send(err);
			}
			else{
				console.log(status);
				res.send(status);
			}
		});
	});
	
	  /*-------------------*/
	 /*-Get home location-*/
	/*-------------------*/
	app.get('/home/location', function(req,res){
		//Home.get_location;
	});
	
	  /*-----------------*/
	 /*-Turn on heating-*/
	/*-----------------*/
	app.post('/home/turn_on', function(req,res){
		//Home.turn_on(params);
	});
	
	  /*------------------*/
	 /*-Turn off heating-*/
	/*------------------*/
	app.post('/home/turn_off',function(req,res){
		//Home.turn_off(params);
	});
	
	
}