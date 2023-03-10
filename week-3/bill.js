/*
======================================
; Title: bill.js 
; Author: Professor Krasso
; Date: 20 Jan 2023
; Modified By: Chris Gorham
; Description: This code is used to calculate the bill in the Restaurant App
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/

export class Bill {
    _beverages = [];
    _appetizers = [];
    _mainCourses = [];
    _desserts = [];

    addBeverage(beverage) {
            this._beverages.push(beverage);
        }
    addAppetizer(appetizer) {
            this._appetizers.push(appetizer);
        }
    addMainCourse(mainCourse) {
            this._mainCourses.push(mainCourse);
        }
    addDessert(dessert) {
            this._desserts.push(dessert);
        }
    getTotal() {
            let total = 0;
            let beverageTotal = this._beverages.forEach(function(beverage) {
                total += parseFloat(beverage.price);
            })
            let appetizerTotal = this._appetizers.forEach(function(appetizer) {
                total += parseFloat(appetizer.price);
            })
            let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {
                total += parseFloat(mainCourse.price);
            })
            let desertTotal = this._desserts.forEach(function(dessert) {
                total += parseFloat(dessert.price);
            })
            return total
        }
    }

    