/* eslint-disable no-undef */
'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
    category : {type:String,require:true},
    name : { type:String,require:true},
    display_name : {type:String,require:true},
    description : {type:String,require:false}
});

module.exports = mongoose.model('products',products)
