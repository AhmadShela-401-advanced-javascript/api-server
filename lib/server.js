/* eslint-disable no-undef */
'user strict';
const notFoundHandler = require('../middleware/404');
const errorHandler = require('../middleware/500');

const express = require('express');
const routerV1 = require('../routes/v1')
const morgan = require('morgan');
const cors = require('cors');
/**
 * middleWares
 */
const app = express();
app.use(express.json())
app.use(cors());
app.use(morgan('dev'));
app.use(routerV1);

app.use('*', notFoundHandler);
app.use(errorHandler);

/**
 * connection object
 */

module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`lestining on ${PORT}`));

    }
}
