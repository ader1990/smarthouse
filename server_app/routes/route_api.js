
var User = require('./../models/model_user.js');
var Home = require('./../models/model_home.js');

module.exports = function(db,app){
	
      /*---------------*/
	 /*-Get all users-*/
	/*---------------*/	
	app.get('/users',function(req,res){
	    console.log('--- GET /users ...');
		User.get_all(db,function(err,users){
			if(err){
				console.log(err);
			}
			else{
				console.log(users);
				res.send(users);
			}
		});
	});
	
      /*---------------*/
	 /*-Get user home-*/
	/*---------------*/
	/*
	app.get('/user/:user_id/home', function(req,res){
		console.log('--- GET /user/home ...');
		var params = {
			user_id : req.
		}
	});
	*/
	
	  /*---------------*/
	 /*-Get user info-*/
	/*---------------*/
	app.get('/user/:user_id/info', function(req,res){
		console.log('--- GET /user/:user_id/info ...');
		var params = {
			user_id : req.params.user_id
		}
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
		console.log('--- POST /user/login ...');
		
		var params = { 
			user_id : req.body.user_id,
			user_pass : req.body.user_pass
		}
		
		User.login(db,params,function(err,status){
			if(err){
				console.log('>>>>>User.login : FAILURE!');
				console.log(err);
				res.send(err);
			}
			else{
				console.log('>>>>>User.login : SUCCESS!');
				res.send(status);
			}
		});
	});
	
	  /*---------------*/
	 /*-Register user-*/
	/*---------------*/
	app.post('/user/register', function(req,res){
		console.log('--- POST /user/register ...');
	    var params = {
			home_id:req.body.home_id,
			user_id:req.body.user_id,
			user_pass:req.body.user_pass
		}
		User.register(db,params,function(err,status){
			if(err) {
				console.log('>>>>>User.register : FAILURE!');
				console.log(err);
				res.send(err);
			}
			else{
				console.log('>>>>>User.register : SUCCESS!');
				res.send(status);
			}
		});
	});
	
	  /*---------------------*/
	 /*-Get user home stats-*/
	/*---------------------*/	
	app.get('user/:user_id/home_stats', function(req,res){
		console.log('---GET user/:user_id/home_stats ...');
		var params = {
			'user_id': req.params.user_id
		}
		User.user_house_stats(db,params, function (err, home_info){
			if(err){
				console.log('>>>>>User.user_house_stats : FAILURE!');
				console.log(err);
				res.send(500,err);
			}
			else{
				console.log('>>>>>User.user_house_stats : SUCCESS!');
				res.send(home_info);
			}
		});
	});
	
	  /*---------------*/
	 /*-Set user home-*/
	/*---------------*/
	app.post('user/set_home', function(req,res){
		console.log('---POST user/add_home');
		var params = {
			'user_id':req.body.user_id,
			'home_id':req.body.user_id,
			'home_lat':req.body.latitude,
			'home_long':req.body.longitude
		}
		User.set_home(db,params,function(err,status){
			if(err){
				console.log('>>>>>FAILURE!');
				console.log(err);
				res.send(500,err);
			}
			else{
				console.log('<<<<<User.add_home : SUCCESS');
				res.send(status);
			}
		});
	});
/**************************************************************************************/	
/**************************************************************************************/
/*							     HOME ROUTES    									  */
/**************************************************************************************/
/**************************************************************************************/
	
	
	  /*---------------*/
	 /*-Get home info-*/
	/*---------------*/
	app.get('/home/:house_id/info',function(req,res){
		console.log('---GET home/:house_id/info');
		var params = {
			house_id : req.params.house_id
		}
		Home.get_info(db,params,function(err,home_info){
			if(err){
				console.log('>>>>>FAILURE!');
				console.log(err);
				res.send(500,err);
			}
			else{
				console.log('<<<<<SUCCESS');
				res.send(home_info);
			}
		});
	});
	
	  /*-------------------*/
	 /*-Get home location-*/
	/*-------------------*/
	app.get('/home/location', function(req,res){
		console.log('--- GET /home/location ...');
		//Home.get_location;
	});
	/*----------------------------------------------*/
	/*-Check if the phone is approaching the house-*/
	/*--------------------------------------------*/
	app.post('/user/approaching', function(req, res){
		var params = {
			'user_id': req.body.user_id,
			'location': req.body.location
		};
		User.approaching(params, function(err, response){
			if(err){
				res.send(err);
			}else{
				res.send(response);
			}
		})
	});
	
	  /*-----------------*/
	 /*-Turn on heating-*/
	/*-----------------*/
	app.post('/home/turn_on', function(req,res){
		console.log('--- POST /home/turn_on ...');
		//Home.turn_on(params);
	});
	
	  /*------------------*/
	 /*-Turn off heating-*/
	/*------------------*/
	app.post('/home/turn_off',function(req,res){
		console.log('--- POST /home/turn_off ...');
		//Home.turn_off(params);
	});
	
	
}