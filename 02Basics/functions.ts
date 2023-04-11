function addTwo(num: number) {
    // num.toUpperCase() this shouldn't be allowed. its because of any
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}


addTwo(2)
getUpper("Hey")

signUpUser("Hitesh", "@gmail.com", false)


// you can give lesser arguments by setting up default values ex

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

loginUser("h", "h@h.com")

// for functions to return a particular type following example

function addTwo2(num: number) :number{
    // num.toUpperCase() this shouldn't be allowed. its because of any
    return num + 2
}

// Functions returning two or more types of return types can also be dealt with later

// function getValue(myVal: number): boolean {
//     if (myVal>5) {
//         return true
//     }
//     return myVal
// }


const getHello = (s: string) => {
    return ""
}

const heros = ["thor", "spiderMan", "ironMan"]

heros.map((hero):string => {
    return `hero is ${hero}`
})


function consoleError(errMsg: string): void {
    console.log(errMsg);
    
}

function handleError(errMsg: string): never {
    throw new Error(errMsg)
    // never is used when it is exception or error throw or stop of execution of program
}
export{}