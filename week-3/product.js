/*
======================================
; Title: product.js 
; Author: Professor Krasso
; Date: 20 Jan 2023
; Modified By: Chris Gorham
; Description: This code establishes the product class which is exported to the other .js files
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/

export class Product 
{
    constructor (name, price)
    {
        this.name = name;
        this.price = price;
    }
}