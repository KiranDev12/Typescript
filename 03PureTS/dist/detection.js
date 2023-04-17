"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
// could be string or even null
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
//in can narrow through the keys in interface
function isAdminAcc(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// anything that uses new keyword, we can use instanceof. It is similar to the typeof
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// is key word
// this returns boolean
// function isFish(pet: Fish | Bird) {
//     return (pet as Fish).swim !== undefined
// }
// this returns fish or bird as a pet
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //return shape.side ** 2
}
// always have a default with never
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        // this never supposed to run
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
