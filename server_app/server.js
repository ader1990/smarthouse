var express = require('express');
var app = express();

//Express configuration
require('./config.js')(app);

//API Routes
require('./routes/route_api.js')(app);

console.log('Server listening on port: 3000');

app.listen(3000);
