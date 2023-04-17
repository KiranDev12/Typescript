const score: Array<number> = []
const names: Array<string> = []

function identityOne(val:boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

// when u pass a type that type is locked and return the sane type
function identityThree<Type>(val: Type): Type{
    return val
}

// identityThree(true)

function identityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: String
    type: number
}

function identityFive<Bottle>(val: Bottle): Bottle{
    return val
}

// return type must be one of the values from the product
function getSearchProducts<T>(products: T[]): T{
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    //do some op
    const myIndex = 4
    return products[myIndex]
}

// <T> => <T,> is used to differentiate it from tags

function anotherFunction<T, U extends number>(valOne: T, valTwo:U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, "4")
//when we use extends we cant do above

anotherFunction(3, 4.5)


interface Database {
    connection: string, 
    username: string,
    password: string
}
function anotherFunction2<T, U extends Database>(valOne: T, valTwo: U) {
    return {
        valOne,
        valTwo
    }
}

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

// GENERIC CLASS THAT HANDLES SELLABLE WHICH CAN BE BOTH COURSE OR QUIZ

class Sellable<T>{
    public cart: T[] = []

    addToCart(products: T) {
        this.cart.push(products)
    }
}