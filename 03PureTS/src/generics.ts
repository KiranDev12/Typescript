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