var express = require('express');
var app = express();

app.configure(function(){
	app.use(express.bodyParser());
	app.use(app.router); 
});

app.get('/', function(req, res){
  res.send('hello world');
});
app.post('/', function(req,res){
	res.send(req.body.foo);
});
console.log('Server listening on port: 3000');

app.listen(3000);
