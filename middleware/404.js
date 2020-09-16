/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
/**
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {callBack} next 
 */
module.exports = (req,res,next)=>{
res.status(400).send('Oops : 404 Not Found')
}