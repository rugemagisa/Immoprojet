 // appel express
let express    = require('express');
// definir app 
let app        = express(); 
let connection = require('./db.js');

// Configure bodyparser to handle POST requests
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importer les routes
let router = require('./routes');
app.use('/', router);

// definir le port de lancement
var port = 3000
app.listen(port, function () { console.log('Running server on port ' + port); })

// creat connection 
var mysql = require("mysql");