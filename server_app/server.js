var express = require('express');
var app = express();
var cluster = require('cluster');

if (cluster.isMaster)
	{
	console.log('Master is online. Spawning workers.')
	var cpuCount = require('os').cpus().length;
	for(var i = 0; i < cpuCount; i++)
	{
		cluster.fork();
		console.log('Worker #' + i + ' spawned.');
	}


//Express configuration
require('./config.js')(app);

//API Routes
require('./routes/route_api.js')(app);
}

console.log('Worker #' + cluster.worker.id + ' listening on port: 3000');

app.listen(3000);
