/*
======================================
; Title: float-max-fields.js 
; Author: Professor Krasso
; Date: 06 Feb 2023
; Modified By: Chris Gorham
; Description: This code is used for the float max fields in the Future Value App assignment
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/

export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    // validates if the number entered is higher than the max
    validate() {
        if (parseFloat(this.field) < this.max) {
            return true;
        }

        else {
            return false;
        }
    }
    
    // error message
    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`;
    }
}
