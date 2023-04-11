// string
let greetings: string = "Hello";

// let myNum = 7;
// myNum.toLowerCase();

greetings.toLowerCase();
console.log(greetings);

// number
let userId: number = 334466.3

// boolean
let isLoggedIn: boolean = false

// type inference - In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation
// instead of the above userId we can use
// don't do too obvious things, use : where its needed.

let userId2 = 3000.2
userId2.toFixed()

// this will inferes it as any
// let hero;

// in such situations its better to specify
let hero: string;

function getHero() {
    return "Thor"
}
hero = getHero()

export { }