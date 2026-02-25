// let myName = "rishabh       "
// let myChannel = "chai       "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rishabh = function() {
    console.log(`Rishabh is present in all objects`);
}

Array.prototype.heyRishabh = function() {
    console.log(`Rishabh says hello`);
    
}

// heroPower.rishabh()
// myHeros.rishabh()
// myHeros.heyRishabh()
// heroPower.heyRishabh()



// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport
}


teacher.__proto__= User


// Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher)


let anotherUsername = "ChaiAurCode          "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);      
}

anotherUsername.trueLength()
"rishabh".trueLength()
"icetea".trueLength()