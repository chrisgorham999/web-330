/*
======================================
; Title: product.js 
; Author: Professor Krasso
; Date: 01 Feb 2023
; Modified By: Chris Gorham
; Description: This code is used for the product class in the Bob's Automotive Shop project
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/

"use-strict";

// creates the Product class and makes the ID a random radix 16 string
export class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}