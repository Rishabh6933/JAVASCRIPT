const user = {
    username : "rishabh",
    loginCount :  8,
    signedIn : true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

const user2 = {
    username : "rishabh",
    loginCount :  8,
    signedIn : true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);




function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Rishabh", 12, true)
// const userTwo = new User("Twinkle", 10, true)

console.log(userOne.constructor);
// console.log(userTwo);

// working of new object
// STEP-I --> Empty object created
// STEP-II --> Constructor function called because of new function
// STEP-III --> All stuff is injected into the "this" keyword
// 