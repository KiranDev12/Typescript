"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "hitesh", isPaid: false });
var newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
createUser(newUser);
//The above thing must not be allowed as there is a extra parameter, this is one of the weird behavior of objects in TS
//returning a object
function createCourse() {
    return { name: "ReactJS", price: 300 };
}
var myUser = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.email = "change@gmail.com";
