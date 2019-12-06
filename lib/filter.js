'use strict'

const hasDescription = (product) => product.hasOwnProperty('description') && product.description !== null && product.description.length !== 0

const isNumeric = (num) => typeof(num) === 'number' && (num !== Infinity) && !isNaN(num)

const isPriceNumeric = (product) => isNumeric(product.price)

const isUPCTwelveDigitNumber = (product) => product.upc.length === 12 && !isNaN(product.upc)

module.exports = {
    hasDescription,
    isNumeric,
    isPriceNumeric,
    isUPCTwelveDigitNumber
}