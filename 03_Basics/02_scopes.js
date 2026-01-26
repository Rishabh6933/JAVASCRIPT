var c = 300
let a = 300
if(true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log(`INNER A: ${a}`);
}

// console.log(`OUTER A: ${a}`);
// console.log(b);
// console.log(c);


function one() {
    const username = "Rishabh"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()


if(true) {
    const username = "rishabh"
    if(username === "rishabh") {
        const website = " youtube"
        // console.log((username + website));   
    }
    // console.log(website);    
    
}

// console.log(username);ṇ


// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++


console.log(addOne(5))
function addOne(num) {
    return num + 1
}


const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5))