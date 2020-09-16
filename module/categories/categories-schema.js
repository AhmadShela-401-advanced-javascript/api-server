/* eslint-disable no-undef */
'sue strict';
const mongoose = require('mongoose');

const categories = mongoose.Schema({
    name : {type:String,require:true},
    display_name : {type:String,require:true},
    description : {type:String,require:false}
});

module.exports = mongoose.model('categories',categories)