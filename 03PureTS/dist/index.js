"use strict";
// class User {
//     email: string
//     private name: string
//     city: string = ""
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// Professional Industry grade way of writing classes in TS
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    deleteToken() {
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    //getter cant have any parameter
    get courseCount() {
        return this._courseCount;
    }
    //setter doesn't have return types
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("h@h.com", "hitesh");
hitesh.city = "Jaipur";
console.log(hitesh);
