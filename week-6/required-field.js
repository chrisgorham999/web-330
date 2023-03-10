/*
======================================
; Title: required-field.js 
; Author: Professor Krasso
; Date: 06 Feb 2023
; Modified By: Chris Gorham
; Description: This code is used for the required field in the Future Value App assignment
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/

export class RequiredField {
    constructor (name, field) {
        this.name = name;
        this.field = field;
    }

    // validates that fields have an input
    validate() {
        if (this.field !== "") {
            return true;
        }
        else {
            return false;
        }
    }

    // error message
    getMessage() {
        return `${this.name} is a required field.`;
    }
}