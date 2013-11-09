

var Test = require('./../models/model_test.js');

module.exports = function(db,app){
	app.get('/', function(req, res){
		res.send('hello world');
	});
	app.post('/', function(req,res){
		
		Test.testAdd(db,req.body,function(err,status){
			if(err) console.log(err);
			else res.send('success! check console :D');
		});
	});
}