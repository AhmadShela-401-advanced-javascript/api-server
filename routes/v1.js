/* eslint-disable no-undef */
'use strict';
const express = require('express');
const router = express.Router();

const categories = require('../module/categories/categories-collection');
const products = require('../module/products/products-collection.js');

router.get('/api/v1/:model', handleAllGetRequists);
router.post('/api/v1/:model', handleAllPostRequists);
router.put('/api/v1/:model/:id', handleAllPutRequists);
router.delete('/api/v1/:model/:id', handleAllDeleteRequists);

router.param('model', getModel);

function getModel(req, res, next) {
    let model = req.params.model
    switch (model) {
        case `products`: req.model = products;
            next();
            break;
        case `categories`: req.model = categories;
            next();
            break;

        default:
            console.log(model);
            next("Invalid Model!!! ");
            break;
    }
}

function handleAllGetRequists(req, res, next) {
    req.model.get().then(result => {
        res.status(200).json(result)
    }).catch(next)

}

function handleAllPostRequists(req, res, next) {
    req.model.create(req.body).then(result => {
        res.status(200).json(result)
    }).catch(next)

}

function handleAllPutRequists(req, res, next) {
    req.model.update(req.params.id,req.body).then(result => {
        res.status(200).json(result)
    }).catch(next)

}

function handleAllDeleteRequists(req, res, next) {
    req.model.delete(req.params.id,req.body).then(result => {
        res.status(200).json(result)
    }).catch(next)

}

module.exports = router;
