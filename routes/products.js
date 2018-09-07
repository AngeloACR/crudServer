const express = require('express');
const productsRouter = express.Router();

//Create Product
productsRouter.post('/cProduct', (req, res, next) => {

	const db = req.app.get('db');

	const pPrice = req.body.pPice;
	const pName = req.body.pName;
	const pDes = req.body.pDes;
	const pStock = req.body.pStock;

	if(pStock){
		const inStock = 1
	} else {
		const inStock = 0
	}

	//Query to create element

	db.query();

});

//Get Product
productsRouter.get('/gProduct/:id', (req, res, next) => {
	const db = req.app.get('db');

	const pId = req.params.id

	//Query to get element by id
	db.query();

});

//Get all Products
productsRouter.get('/gProducts', (req, res, next) => {
	const db = req.app.get('db');


	//Query to get all elements
	db.query();

});

//Update Product Info
productsRouter.post('/uProduct', (req, res, next) => {
	const db = req.app.get('db');

	const pId = req.body.pId;
	const pName = req.body.pName;
	const pDes = req.body.pDes;
	const pPrice = req.body.pPrice;
	const pStock = req.body.pStock;

	if(pStock){
		const inStock = 1
	} else {
		const inStock = 0
	}

	//Query to update product info
	db.query();
});

//Update Product Name
productsRouter.post('/uPName', (req, res, next) => {
	const db = req.app.get('db');

	const pId = req.body.pId;
	const pName = req.body.pName;

	//Query to update product Name
	db.query();
});

//Update Product Price
productsRouter.post('/uPPrice', (req, res, next) => {
	const db = req.app.get('db');

	const pId = req.body.pId;
	const pPrice = req.body.pPrice;

	//Query to update product price
	db.query();
});

//Update Product Description
productsRouter.post('/uPDes', (req, res, next) => {
	const db = req.app.get('db');

	const pId = req.body.pId;
	const pDes = req.body.pDes;

	//Query to update product description
	db.query();
});

//Update Product Stock
productsRouter.post('/uPStock', (req, res, next) => {
	const db = req.app.get('db');

	const pId = req.body.pId;
	const pStock = req.body.pStock;

	if(pStock){
		const inStock = 1
	} else {
		const inStock = 0
	}

	//Query to update product Stock
	db.query();
});

//Delete Product
productsRouter.get('/dProduct/:id', (req, res, next) => {
	const db = req.app.get('db');

	const pId = req.params.id;

	//Query to delete product
	db.query();
});


//Delete Product
productsRouter.get('/dProducts', (req, res, next) => {
	const db = req.app.get('db');

	//Query to delete all products
	db.query();
});

module.exports = productsRouter;