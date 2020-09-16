/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

require('@code-fellows/supergoose');

const cvategory = require('../module/categories/categories-collection');

describe('categories Module', ()=>{

    it('the givin categories saved in the DB',async()=>{
        const categoryObj ={
            name: "Chocolet",
            display_name: "Chocolet",
            description: "Chocolet"
          };
          const result = await cvategory.create(categoryObj);
          Object.keys(categoryObj).forEach(key => {
            expect(result[key]).toEqual(categoryObj[key])
          });
    });

    it('the givin cvategory get in the DB',async()=>{
        const categoryObj ={
            name: "Chocolet",
            display_name: "Chocolet",
            description: "Chocolet"
          };
          const result = await cvategory.create(categoryObj);
          const data = await cvategory.get(result._id);
          Object.keys(categoryObj).forEach(key => {
            expect(data[0][key]).toEqual(categoryObj[key])
          });
    });

    it('the givin cvategory update in the DB',async()=>{
        const categoryObj ={
            name: "Chocolet",
            display_name: "Chocolet",
            description: "Chocolet"
          };
          const newCategoryObj ={
            name: "laith",
            display_name: "laith",
            description: "Chocolet"
          };
          const result = await cvategory.create(categoryObj);
          const updatedData = await cvategory.update(result._id,newCategoryObj)
          const data = await cvategory.get(result._id);
          Object.keys(newCategoryObj).forEach(key => {
            expect(data[0][key]).toEqual(newCategoryObj[key])
          });
    });

    it('the givin cvategory delete in the DB',async()=>{
        const categoryObj ={
            name: "Chocolet",
            display_name: "Chocolet",
            description: "Chocolet"
          };
          const result = await cvategory.create(categoryObj);
          const updatedData = await cvategory.delete(result._id)
        //   const data = await cvategory.get(result._id);
          Object.keys(categoryObj).forEach(key => {
            expect(updatedData[key]).toEqual(categoryObj[key])
          });
    });

});