'use strict'
/* eslint-env jest */

const { getValidProductList, getInvalidProductList } = require('../../products/validation')

const products = require('../testData/products.json')
const expectValidProduct = require('../testData/expectValidProduct.json')

describe('getValidProductList', () => {
    test('Should get productList has a description, price is a number, and UPC is a 12 digit number', ()=>{
        expect(getValidProductList(products)).toEqual(expectValidProduct)
    })
})
describe('getInvalidProductList', () => {
    test('Should get invalid productList does not haave a description, or price is not numeric, or UPC is not a 12 digit numeric string', ()=>{
        expect(getInvalidProductList(products)).toEqual({'product': 'invalid'})
    })
})