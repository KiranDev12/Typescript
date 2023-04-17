"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// when u pass a type that type is locked and return the sane type
function identityThree(val) {
    return val;
}
// identityThree(true)
function identityFour(val) {
    return val;
}
function identityFive(val) {
    return val;
}
// return type must be one of the values from the product
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //do some op
    const myIndex = 4;
    return products[myIndex];
};
// <T> => <T,> is used to differentiate it from tags
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// anotherFunction(3, "4")
//when we use extends we cant do above
anotherFunction(3, 4.5);
function anotherFunction2(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// GENERIC CLASS THAT HANDLES SELLABLE WHICH CAN BE BOTH COURSE OR QUIZ
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
