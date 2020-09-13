# api-server
We’re opening a online store! In order to support our web application, we need to create an API that will serve specific data (namely, categories and products) to our application. We will write an API to interface with our databases to provide category and product information to our front end app.

As it is highly likely that we will need more data types and sources in the future, it’s imperative that we build this API as a standardized means of working with any data model, using any persistence system, though a common interface. The API Server must operate as follows:

## Solution

Install json-server globally on your computer
Work in your api-server repository
Create a folder called data with a db.json file, with containers for your data models
`{ "categories" : [], "products": [] }`
Start json-server from within your working folder and “watch” your database file
json-server --watch ./data/db.json
Your api will automatically respond to the following endpoints:
/categories `GET`, `POST`
/categories/:id/ `PUT`, `DELETE`
/products `GET`, `POST`
/products/:id/ `PUT`, `DELETE`
Use httpie (command line), Insomnia, Postman, or any other “ReST” testing application to `POST` some categories and products, using `JSON`, into your `API` so that you have some data in there.
Note that `json-server` does not validate your data, it’ll just save whatever you send it. Be sure that you obey these rules for your data as you create/update it:
Data models should contain the following fields:
categories
`id, name, display_name, description`
products
`id, category, name, display_name, description `

## Swagger Documentation
https://app.swaggerhub.com/apis/ahmad2020/default-title/0.1