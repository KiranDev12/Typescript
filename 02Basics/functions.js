"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase() this shouldn't be allowed. its because of any
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
addTwo(2);
getUpper("Hey");
signUpUser("Hitesh", "@gmail.com", false);
// you can give lesser arguments by setting up default values ex
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("h", "h@h.com");
// for functions to return a particular type following example
function addTwo2(num) {
    // num.toUpperCase() this shouldn't be allowed. its because of any
    return num + 2;
}
// Functions returning two or more types of return types can also be dealt with later
// function getValue(myVal: number): boolean {
//     if (myVal>5) {
//         return true
//     }
//     return myVal
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderMan", "ironMan"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
    // never is used when it is exception or error throw or stop of execution of program
}
