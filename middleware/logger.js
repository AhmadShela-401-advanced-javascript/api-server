'use strict';
/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {callBack Function} next
 */
module.exports = (req,res,next)=>{
    let reqDate = new Date().toDateString();
    let reqTime = new Date().getHours();
    let reqTime1 = new Date().getMinutes();
    let reqTime2 = new Date().getSeconds();
    console.log(`${req.method} : ${req.path} : ${req.requestTime}`);
    next();
}