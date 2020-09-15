'use strict';

// const router = require('../../lib/server.js').server;
const express = require('express');
const categories = require('../../module/categories/categories-collection');
const router = express.Router();


router.post('/categories',postcategories)
router.get('/categories',getAllcategories);
router.get('/categories/:id',getAllcategories);
router.put('/categories/:id',updatecategories);
router.patch('/categories/:id',patchcategories);
router.delete('/categories/:id',deletecategories);


function postcategories(req,res,next) {
    categories.create(req.body).then(data =>{
        res.status(200).json(data)
    }).catch(next);
};

function getAllcategories(req,res,next) {
    var _id = req.params.id
      categories.get(_id).then(data =>{
         res.status(200).json(data)
     }).catch(next);
};

function updatecategories(req,res,next) {
    var _id = req.params.id;
    categories.update(_id,req.body).then(data =>{
        res.status(200).json(data);
    }).catch(next);
};

function deletecategories(req,res,next) {
    var _id = req.params.id;
    categories.delete(_id,req.body).then(data =>{
        res.status(200).json(data);
    }).catch(next);
};

function patchcategories(req,res,next) {
    var _id = req.params.id;
    categories.update(_id,req.body).then(data =>{
        res.status(200).json(data);
    }).catch(next);
};
module.exports = router;