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


// creates CartComponent class and extends it for use in our html file
class CartComponent extends HTMLElement {
    constructor () {
        super();
    }

    // the CallBack function and the associated html to attach to it
    connectedCallback() {
        this.innerHTML = `
        <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
        `;
    }
}

// defines the id to call in the html file
customElements.define("cart-component", CartComponent);