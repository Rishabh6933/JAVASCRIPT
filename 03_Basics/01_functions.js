function sayMyName() {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(num1, num2) {        //in a function num1 and num2 are parameters
//     console.log(num1 + num2)
// }
// addTwoNumbers(3,4)


function addTwoNumbers(num1, num2) {        //in a function num1 and num2 are parameters
    // let result = num1 + num2
    // return result

    return num1+num2
}


const result = addTwoNumbers(3,4)              // but here when we call the function it is argument
// console.log(result);


function loginUserMessage(username) {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculatePrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculatePrice(200, 400, 600));


const user = {
    username: "Rishabh",
    prices: 199
}


function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Rishabh",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));
