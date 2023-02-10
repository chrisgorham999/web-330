/*
======================================
; Title: float-min-fields.js 
; Author: Professor Krasso
; Date: 06 Feb 2023
; Modified By: Chris Gorham
; Description: This code is used for the float min fields in the Future Value App assignment
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/

export class FloatMinField {
    constructor (name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    // validates if the number entered is higher than the min
    validate() {
        if (parseFloat(this.field) > this.min) {
            return true;
        }

        else {
            return false;
        }
    }

    // error message
    getMessage() {
        return `${this.name} must be more than ${this.min}. You entered ${this.field}.`;
    }
}