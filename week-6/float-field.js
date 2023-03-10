/*
======================================
; Title: float-fields.js 
; Author: Professor Krasso
; Date: 06 Feb 2023
; Modified By: Chris Gorham
; Description: This code is used for the float fields in the Future Value App assignment
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/

export class FloatField {
    constructor (name, field)
    {
        this.name = name;
        this.field = field;
    }

    // validates if there is a number (or not) entered into each field
    validate() {
        if (!Number.isNaN(parseFloat(this.field))) {
            return true;
        }
        else {
            return false;
        }
    }

    // error message 
    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}.`;
    }
}