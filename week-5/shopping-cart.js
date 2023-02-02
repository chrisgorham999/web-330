/*
======================================
; Title: shopping-cart.js 
; Author: Professor Krasso
; Date: 01 Feb 2023
; Modified By: Chris Gorham
; Description: This code is used for the ShoppingCart class in the Bob's Automotive Shop project
; Sources Used: 
; Web 330 HTML, CSS, and JavaScript Requirements Word Document
; MDN Web Docs Iterators and generators, URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
;=====================================
*/

"use-strict";

// creates  the ShoppingCart class, count function, and add function
export class ShoppingCart {
    constructor () {
        this.products = []
    }
    
    // counts the number of products 
    count() {
      return this.products.length
    }

    // adds a product to products using an iterator
    add(product) {
      this.products.push(product);
    }
      *[Symbol.iterator] () {
        for (let product of this.products) {
            yield product
        }
    }
}