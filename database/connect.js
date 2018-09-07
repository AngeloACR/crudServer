var mysql = require('mysql');
var data = require('./config')

	var connection = mysql.createConnection({
	    host     : '127.0.0.1',
	    user     : data.user,
	    password : data.pass,
	    database : data.dbName
	});

	connection.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");

	});


module.exports = connection
