/*
======================================
; Title: cart-component.js 
; Author: Professor Krasso
; Date: 01 Feb 2023
; Modified By: Chris Gorham
; Description: This code is used for the CartComponent class in the Bob's Automotive Shop project
; Sources Used: Web 330 HTML, CSS, and JavaScript Requirements Word Document
;=====================================
*/



class CartComponent extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
        `;
    }
}

customElements.define("cart-component", CartComponent);