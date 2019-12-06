'use strict'

const hasDescription = (product) => product.hasOwnProperty('description') && product.description !== null && product.description.length !== 0


module.exports = {
    hasDescription
}