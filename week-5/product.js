
"use-strict";

export class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(radix, 16).slice(2);
    }
}