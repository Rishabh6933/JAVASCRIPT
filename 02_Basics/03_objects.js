// Singleton
// object.create


// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Rishabh",
    "full name": "RISHABH SHARMA",
    age: 20,
    [mySym]: "mykey1",                // to use symbol in object you have to use square bracket
    location: "Noida",
    email: "rishabh@google.com",
    isLoggedIn : false,
    lastLoggedDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

jsUser.email = "rishabhsharma@google.com"
// Object.freeze(jsUser)
jsUser.email = "rishabhsharma@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function() {
    console.log("Hello JS user");   
}

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);   
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
