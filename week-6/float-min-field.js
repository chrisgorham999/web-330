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

    validate() {
        let value = parseFloat(this.field)
        if (value > this.min) {
            return true
        }

        else {
            return false
        }
    }

    getMessage() {
        return "<name> must be more than <min>. You entered <field>"
    }
}