'user strict';
// require('dotenv').config();
const notFoundHandler = require('../middleware/404');
const errorHandler = require('../middleware/500');
const timeStamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const express = require('express');
const productsRoute = require('../routes/products/products.js')
const categoriesRoute = require('../routes/categories/categories.js')
const cors = require('cors');
const morgan = require('morgan');
const app = express();
app.use(express.json())
app.use(timeStamp);
app.use(logger);
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1', productsRoute);
app.use('/api/v1', categoriesRoute);
// const PORT = 3000 || process.env.PORT
// var ArrCategory = [{
//         "name": "Chocolet",
//         "display_name": "Chocolet",
//         "description": "Chocolet",
//         "id": 1
//     }];
// var ArrProducts = [{
//         "category": "Chocolet",
//         "name": "Galaxy",
//         "display_name": "Galaxy Dark",
//         "description": "Galaxy dark",
//         "id": 1
//     }];


// app.get('/products', (req, res) => {
//     res.status(200).send(ArrProducts)
// });
// app.post('/products', (req, res) => { // console.log(req.body);
//     let newProduct = {
//         category: req.body.category,
//         name: req.body.name,
//         display_name: req.body.display_name,
//         description: req.body.description,
//         id: req.body.id
//     }
//     ArrProducts.push(newProduct)
//     res.status(200).json(ArrProducts)
// });

// app.get('/products/:id', (req, res) => {
//     res.status(200).json(findObjById(ArrProducts, req.params.id))
// });


// app.put('/products/:id', (req, res) => {
//     console.log('myBody : ', req.body);
//     let result = findObjById(ArrProducts, req.params.id)
//         result.category = req.body.category,
//         result.name = req.body.name,
//         result.display_name = req.body.display_name,
//         result.description = req.body.description,
//         result.id = req.body.id
//         res.status(200).json(result)
//     });

//     app.delete('/products/:id', (req, res) => {
//         ArrProducts.forEach((val, index) => {
//             if (val.id == req.params.id) {
//                 ArrProducts.splice(index, 1);
//             }
//         });
//         res.status(200).json(ArrProducts);
//     });

    /**************category********** */
    // app.get('/categories', (req, res) => {
    //     res.status(200).send(ArrCategory)
    // });
    // app.post('/categories', (req, res) => { // console.log(req.body);
    //     let newProduct = {
    //         category: req.body.category,
    //         name: req.body.name,
    //         display_name: req.body.display_name,
    //         description: req.body.description,
    //         id: req.body.id
    //     }
    //     ArrCategory.push(newProduct)
    //     res.status(200).json(ArrCategory)
    // });

    // app.get('/categories/:id', (req, res) => {
    //     console.log('req.params',req.params);
    //     res.status(200).json(findObjById(ArrCategory, req.params.id))
    // });


    // app.put('/categories/:id', (req, res) => {
    //     console.log('myBody : ', req.body);
    //     var result = findObjById(ArrCategory, req.params.id)
    //     console.log('>>>>>result',result);
    //         result.name = req.body.name,
    //         result.display_name = req.body.display_name,
    //         result.description = req.body.description,
    //         result.id = req.body.id
    //         res.status(200).json(result)
    //     });

        // app.delete('/categories/:id', (req, res) => {
        //     ArrCategory.forEach((val, index) => {
        //         if (val.id == req.params.id) {
        //             ArrCategory.splice(index, 1);
        //         }
        //     });
        //     res.status(200).json(ArrCategory);
        // });

        // function findObjById(arr, id) {
        //     let myItem ;
        //     arr.forEach(item => {
        //         if (item.id == id) {
        //             myItem = item;
        //         }
        //     })
        //     return myItem;
        // }
        app.use('*', notFoundHandler);
        app.use(errorHandler);
        module.exports = {
            server: app,
            start: port => {
                let PORT = port || process.env.PORT || 3000;
                app.listen(PORT, () => console.log(`lestining on ${PORT}`));
        
            }
        }
        
        // module.exports = {
        //     server: app,
        //     start: (port) => {
        //         app.listen(port, (err) => {
        //             if (err) {
        //                 console.log('Error :', err);
        //             } else {
        //                 console.log(`listining on port ${port}`);
        //             }
        //         })
        //     }
        // }
