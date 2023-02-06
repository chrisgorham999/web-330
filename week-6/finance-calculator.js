/*
======================================
; Title: finance-calculator.js 
; Author: Professor Krasso
; Date: 06 Feb 2023
; Modified By: Chris Gorham
; Description: This code is used for the finance calculator in the Future Value App assignment
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/

export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;
    static calculateFutureValue(monthlyPayment, rate, years) {
        let month = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate/100;
        let presentValue = monthlyPayment * month;
        let futureValue = presentValue * (Math.pow(interestRate, month));
        return futureValue.toPrecision(2)
    }
    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        return currencyFormatter.format(field);
    }
}