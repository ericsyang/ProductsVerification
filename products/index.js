'use strict'
const { getValidProductList, getInvalidProductList } = require('./validation')
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request for verifying product list.');

    if (req.body && req.query) {
        const products = req.body

        const productList = req.query.validProduct !== 'true'? getInvalidProductList(products) : getValidProductList(products)
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: productList
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};