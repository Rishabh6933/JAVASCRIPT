const name = "Rishabh"
const repoCount = 50

// console.log(name + repoCount + " value");


// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("rixhabh-sharma-rs")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));


const newString = gameName.substring(0,4) // 4 is not included, negative value can not be included
//console.log(newString);

const anotherString = gameName.slice(-4, 14)
//console.log(anotherString);


const newStringOne = "      hitesh  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://rixhabh.com/rixhabh%20sharma"

console.log(url.replace('%20', '-'))
console.log(url.includes('rixhabh'));

console.log(gameName.split('-'));

