'use strict'
const { hasDescription, isPriceNumeric, isUPCTwelveDigitNumber } = require('../lib/filter')

const getValidProductList = (products) => {
    let validProductList = {}
    Object.keys(products)
        .map((key) => validProductList[key] = products[key]
        .filter((product) => hasDescription(product) && isPriceNumeric(product) && isUPCTwelveDigitNumber(product)))
    return validProductList
}
const getInvalidProductList = (products) => {
    let inValidProductList = {'product': 'invalid'}
    return inValidProductList
}

module.exports = { getValidProductList, getInvalidProductList }