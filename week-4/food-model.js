/*
======================================
; Title: food-model.js 
; Author: Professor Krasso
; Date: 25 Jan 2023
; Modified By: Chris Gorham
; Description: This code is used for the food model in the calorie app
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/

"use-strict";

export class FoodModel {
  constructor (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
}
