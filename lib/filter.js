'use strict'

const hasDescription = (product) => product.hasOwnProperty('description') && product.description !== null && product.description.length !== 0

const isNumeric = (num) => typeof(num) === 'number' && (num !== Infinity) && !isNaN(num)

const isPriceNumeric = (product) => isNumeric(product.price)

module.exports = {
    hasDescription,
    isNumeric,
    isPriceNumeric
}