var mysql = require('mysql');

//connection à la base de données

var mysqlconnection = mysql.createConnection({
    host : 'localhost', 
    user : 'root',
    password : 'root',
    database : 'immosquaredb',
    debug: false
    });

    mysqlconnection.connect((err)=>{
        if(!err)
        console.log('DB connection successful');
        else
        console.log('Db connection failed')
    })