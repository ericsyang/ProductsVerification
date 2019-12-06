'use strict'
/* eslint-env jest */

const { hasDescription, isNumeric, isPriceNumeric} = require('../../lib/filter.js')

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

describe('isNumeric()', () => {
    test('if its type is number, should return true', ()=>{
        expect(isNumeric(1234)).toEqual(true)
    })
    test('if its type is String of number, should return false', ()=>{
        expect(isNumeric('1234')).toEqual(false)
    })
    test('if it is null, should return false', ()=>{
        expect(isNumeric(null)).toEqual(false)
    })
    test('if it is Infinity number, should return false', ()=>{
        expect(isNumeric(1e10000)).toEqual(false)
    })
})

describe('isPriceNumeric()', () => {
    const productWithNumericPrice = {
        "description": "im description",
        "price": 13.6,
        "upc": "218189466108"
    }
    const productWithNullPrice = {
        "description": "im description",
        "price": null,
        "upc": "218189466108"
    }
    test('if price is number, should return true', ()=>{
        expect(isPriceNumeric(productWithNumericPrice)).toEqual(true)
    })
    test('if price is null, should return false', ()=>{
        expect(isPriceNumeric(productWithNullPrice)).toEqual(false)
    })
   
})