'use strict'

const hasDescription = (product) => product.hasOwnProperty('description') && product.description !== null && product.description.length !== 0

const isNumeric = (num) => typeof(num) === 'number' && (num !== Infinity) && !isNaN(num)


module.exports = {
    hasDescription,
    isNumeric
}