const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./database/connect');
const app = express();

const products = require('./routes/products');

// Ports to listen
const testPort= 3000;
const prodPort = process.env.PORT || 8080;

const myPort = testPort;
//const myPort = ProdPort;


app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Set Static Folder

app.use(express.static(path.join(__dirname, 'crudFront')));

//Adding routes
app.set(products, dbConnect);
	//Shop stuff routes
app.use('/', products);


// Index Route

	//In case of error
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

	//Pointing to angular app
app.get('/*', (req,res) => {
	var fileToSend = path.join(__dirname, 'crudFront/index.html') 
	res.sendFile(fileToSend);
});

// Start Server

app.listen(myPort, () => {
	console.log('Server started on port '+ myPort);
});