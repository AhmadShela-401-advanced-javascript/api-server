'use strict';

require('@code-fellows/supergoose');

const product = require('../module/products/products-collection');

describe('Product Module', ()=>{

    it('the givin product saved in the DB',async()=>{
        const productObj ={
            category: "Chocolet",
            name: "Galaxy",
            display_name: "Galaxy Dark",
            description: "Galaxy dark"
          };
          const result = await product.create(productObj);
          Object.keys(productObj).forEach(key => {
            expect(result[key]).toEqual(productObj[key])
          });
    });

    it('the givin product get in the DB',async()=>{
        const productObj ={
            category: "Ahmad",
            name: "Ahmad",
            display_name: "soso",
            description: "soso"
          };
          const result = await product.create(productObj);
          const data = await product.get(result._id);
          Object.keys(productObj).forEach(key => {
            expect(data[0][key]).toEqual(productObj[key])
          });
    });

    it('the givin product update in the DB',async()=>{
        const productObj ={
            category: "Ahmad",
            name: "Ahmad",
            display_name: "soso",
            description: "soso"
          };
          const newProductObj = {
            category: "laith",
            name: "laith",
            display_name: "soso",
            description: "soso"
          };
          const result = await product.create(productObj);
          const updatedData = await product.update(result._id,newProductObj)
          const data = await product.get(result._id);
          Object.keys(newProductObj).forEach(key => {
            expect(data[0][key]).toEqual(newProductObj[key])
          });
    });

    it('the givin product delete in the DB',async()=>{
        const productObj ={
            category: "Ahmad",
            name: "Ahmad",
            display_name: "soso",
            description: "soso"
          };
          const result = await product.create(productObj);
          const updatedData = await product.delete(result._id)
        //   const data = await product.get(result._id);
          Object.keys(productObj).forEach(key => {
            expect(updatedData[key]).toEqual(productObj[key])
          });
    });

});