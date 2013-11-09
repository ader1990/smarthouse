
var cluster = require('cluster');

if (cluster.isMaster)
	{
	console.log('Master is online. Spawning workers.')
	
	var cpuNumber = require('os').cpus().length;
	for(var i = 0; i < cpuNumber; i++)
	
	{
		cluster.fork();
		console.log('Worker #' + i + ' spawned.');
	}

	cluster.on('exit', function(worker) {
		console.log('Worker #' + worker.id + ' died :(');
	});
}
else
{
	var express = require('express');
	
	var app = express();

		//Express configuration
	require('./config.js')(app);

	//API routes
	//require('./routes/route_api.js')(app);
	app.get('/', function(req, res){
		res.send("Worker #" + cluster.worker.id + " served this webpage.");
	});

	console.log('Worker #' + cluster.worker.id + ' listening on port: 3000');
	
	app.listen(30000);	
}
