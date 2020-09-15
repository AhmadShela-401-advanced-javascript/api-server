'use strict';

// const router = require('../../lib/server.js').server;
const express = require('express');
const products = require('../../module/products/products-collection.js');
const router = express.Router();


router.post('/products',postProduct)
router.get('/products',getAllProducts);
router.get('/products/:id',getAllProducts);
router.put('/products/:id',updateProduct);
router.patch('/products/:id',patchProduct);
router.delete('/products/:id',deleteProduct);


function postProduct(req,res,next) {
    products.create(req.body).then(data =>{
        res.status(200).json(data)
    }).catch(next);
};

function getAllProducts(req,res,next) {
    var _id = req.params.id
      products.get(_id).then(data =>{
         res.status(200).json(data)
     }).catch(next);
};

function updateProduct(req,res,next) {
    var _id = req.params.id;
    products.update(_id,req.body).then(data =>{
        res.status(200).json(data);
    }).catch(next);
};

function deleteProduct(req,res,next) {
    var _id = req.params.id;
    products.delete(_id,req.body).then(data =>{
        res.status(200).json(data);
    }).catch(next);
};

function patchProduct(req,res,next) {
    var _id = req.params.id;
    products.update(_id,req.body).then(data =>{
        res.status(200).json(data);
    }).catch(next);
};
module.exports = router;