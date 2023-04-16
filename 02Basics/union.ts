let score: number | string = 33
score = 44
score = "55"

type User = {
    name: string;   
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = { name: "hitesh", id: 1 }

hitesh = { username: "hiteshAdmin", id: 2 }

//UNION Narrowing
function getDBId(id: number | string) {
    // id.toLowerString(); - this is wrong as it can be either num or str
    //Do the following to correct
    if (typeof id === "string") {
        // all string operation can be used
        id.toLowerCase()
    }
}

const data1: number[] = [1, 2, 3]

const data2: string[] = ["1", "2", "3"]

// below can be either a string array or number array purely but cant include both
const data3: string[] | number[] = [1, 2, 3]

// both can be included
const data4: (string | number)[] = [1, "2", "3", 4]

export {}