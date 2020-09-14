'use strict';

module.exports = (req,res,next)=>{
res.status(400).send('Oops : 404 Not Found')
}