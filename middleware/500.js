'use strict';

module.exports = (req,res,next)=>{
res.status(500).send('Oops : 500 Not Found')
}