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
    protected _courseCount = 1
    city: string = "Jaipur"
    constructor(
        public email: string,
        public name: string
    ) {

    }
    private deleteToken() {

    }
    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    //getter cant have any parameter
    get courseCount(): number {
        return this._courseCount
    }
    //setter doesn't have return types
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class subUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const hitesh = new User("h@h.com", "hitesh")
hitesh.city = "Jaipur"
console.log(hitesh);
