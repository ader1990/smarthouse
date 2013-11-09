

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
	app.get('/user/home', function(req,res){
		console.log('--- GET /user/home ...');
		//User.get_home(params);
	});
	
	  /*---------------*/
	 /*-Get user info-*/
	/*---------------*/
	app.get('/user/:user_id/info/', function(req,res){
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
				console.log(err);
			}
			else{
				console.log(status);
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
				console.log(err);
				res.send(err);
			}
			else{
				console.log(status);
				res.send(status);
			}
		});
	});
	
	  /*---------------------*/
	 /*-Get user home stats-*/
	/*---------------------*/	
	app.get('user/:user_id/home_status', function(req,res){
		var params = {
			'user_id': req.params.user_id
		}
		User.user_house_stats(db,params, function (err, home_info){
			if(err){
					console.log(err);			
			}else{
				res.send(home_info);
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
		var params = {
			house_id : req.params.house_id
		}
		Home.get_info(db,params,function(err,home_info){
			if(err){
				console.log(err);
				res.send(500,err);
			}
			else{
				console.log(err);
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