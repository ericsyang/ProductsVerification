'use strict'
/* eslint-env jest */

const {hasDescription} = require('../../lib/filter.js')

describe('hasDescription()', () => {
    const productWithDescrption = {
        "description": "im description",
        "price": 13.6,
        "upc": "218189466108"
    }
    const productNoWithDescrption = {
        "price": 13.6,
        "upc": "218189466108"
    }
    const productWithEmptyDescrption = {
        "description": "",
        "price": 13.6,
        "upc": "218189466108"
    }
    const productWithNULLDescrption = {
        "description": null,
        "price": 13.6,
        "upc": "218189466108"
    }
    
    test('if product does not have description, should return false', () => {
        
        expect(hasDescription(productNoWithDescrption)).toEqual(false)
    })
    test('if product has description, should return true', () => {
       
        expect(hasDescription(productWithDescrption)).toEqual(true)
    })
    test('if product has description, but empty, should return false', () => {
        
        expect(hasDescription(productWithEmptyDescrption)).toEqual(false)
    })
    test('if product has description, but null, should return false', () => {
        
        expect(hasDescription(productWithNULLDescrption)).toEqual(false)
    })
})
