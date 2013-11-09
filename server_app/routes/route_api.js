

var Test = require('./../models/model_test.js');
var Device = require('./../models/model_device.js');
var Home = require('./../models/model_home.js');

module.exports = function(db,app){
	app.get('/', function(req, res){
		res.send('hello world');
	});
	
	app.post('/', function(req,res){
		Test.testAdd(db,req.body,function(err,status){
			if(err) console.log(err);
			else res.send(200);
		});
	});
	
      /*----------------*/
	 /*-Get user homes-*/
	/*----------------*/
	app.get('/user/homes', function(req,res){
		
	});
	
	  /*---------------*/
	 /*-Get user info-*/
	/*---------------*/
	app.get('/user/info', function(req,res){
		//User.get_info(params);
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
			home_pass:req.body.home_pass,
			phone_nr:req.bodt.home_nr
		}
		//Device.register(params);
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