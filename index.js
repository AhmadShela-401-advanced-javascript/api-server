require('dotenv').config();
const PORT = 3030 || process.env.PORT
const server = require('./lib/server.js');
server.start(PORT)