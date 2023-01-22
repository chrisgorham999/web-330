/*
======================================
; Title: appetizer.js 
; Author: Professor Krasso
; Date: 20 Jan 2023
; Modified By: Chris Gorham
; Description: This code is used for the appetizers in the Restaurant App
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/

import { Product } from "./product.js";

export class Appetizer extends Product 
{
    constructor(name, price)
    {
        super(name, price);
    }
}