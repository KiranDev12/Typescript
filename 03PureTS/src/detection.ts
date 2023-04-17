function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}

// could be string or even null
function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

//in can narrow through the keys in interface
function isAdminAcc(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

// anything that uses new keyword, we can use instanceof. It is similar to the typeof
function logValue(x: Date | String) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = {
    swim: () => void
}
type Bird = {
    fly: () => void
}

// is key word
// this returns boolean
// function isFish(pet: Fish | Bird) {
//     return (pet as Fish).swim !== undefined
// }

// this returns fish or bird as a pet
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food"
    }
    else {
        pet
        return "bird food"
    }
}

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle"
    length: number
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    //return shape.side ** 2
}

// always have a default with never
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side ** 2
        case "rectangle":
            return shape.length * shape.width
        // this never supposed to run
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}