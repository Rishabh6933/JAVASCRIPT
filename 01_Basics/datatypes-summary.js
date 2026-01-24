// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Javascript is dynamically typed language, it means
// that variables types are determined at runtime


const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 34565564465354531894n

//console.log(id === anotherId);


// Reference (Non-Primitive)

// Array, Object, Functions


const heroes = ["Shaktiman", "Nagraj", "Doga"];
let myObj = {
    name: "Rishabh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction);     // function
// console.log(typeof heroes);         // object
// console.log(typeof outsideTemp);    // object
// console.log(typeof myObj);          // object
// console.log(typeof id);             // symbol
// console.log(typeof anotherId);      // symbol
// console.log(typeof bigNumber);      // bigint



// <-------------------------------------------------------->

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "rishabhsharmadotcom"
let anotherName = myYoutubeName;
anotherName = "rixhabhpandat"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne;

userTwo.email = "rixhabh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


