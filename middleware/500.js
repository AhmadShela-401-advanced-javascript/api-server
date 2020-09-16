/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';
/**
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {callBack} next 
 */
module.exports = (req,res,next)=>{
res.status(500).send('Oops : 500 Not Found')
}