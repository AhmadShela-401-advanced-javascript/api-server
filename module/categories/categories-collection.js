/* eslint-disable no-undef */
'use strict';

const schema = require('./categories-schema.js');
const Model = require('../mongo-model.js');

class Category extends Model{
    constructor(){
        super(schema);
    }
}

module.exports = new Category()