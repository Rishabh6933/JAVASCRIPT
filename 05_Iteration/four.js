// for in loop mostly for objects
// maps can not be iterated using it


const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} is the shortcut for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {    
    // console.log(programming[key]);
}



// const map = new Map()
// map.set('IN', "INDIA")
// map.set('USA', "UNITED STATES OF AMERICA")
// map.set('FR', "FRANCE")

// for (const key in map) {
//     console.log(key);
// }

