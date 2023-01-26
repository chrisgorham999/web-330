/*
======================================
; Title: calorie-converter.js 
; Author: Professor Krasso
; Date: 25 Jan 2023
; Modified By: Chris Gorham
; Description: This code is used for the calorie converter in the calorie app
; Sources Used: 
; Web 330 HTML, CSS, and JavaScript Requirements Word Document
; W3 Schools JavaScript Classes, URL: https://www.w3schools.com/js/js_classes.asp
; GeeksForGeeks Static Variables, URL: https://www.geeksforgeeks.org/how-to-create-static-variables-in-javascript/
; JavaScript Array Filter(), URL: https://www.w3schools.com/jsref/jsref_filter.asp
;=====================================
*/

"use-strict";

import { FoodModel } from "./food-model.js";

export class CalorieConverter {
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150)
    ];

    static find(name) {
        return data.filter(FoodModel => FoodModel.name === name);
        }
}
