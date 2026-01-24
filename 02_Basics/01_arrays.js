// ARRAYS

const myArr = [0,1,2,3,4,5]
const myHeroes = ["iron-man", "captain-america"]
const myArr2 = new Array(1,2,3,4,5,6)



// javascript  array are resizeable
// console.log(myArr[0]);


// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)    // it shifts all the elements of an array and a new value in starting of the array
// myArr.shift()       // it removes the starting element of an array
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);

//  SLICE AND SPLICE


console.log("Original Array: ", myArr);

const myn1 = myArr.slice(1,3)   //Range is not included and also the original array is not changed

console.log("Sliced Array: ",myn1);
console.log("Original Array after Slice ", myArr);



const myn2 = myArr.splice(1,3)  //Range is included and the elements are removed from the original array 
console.log("Spliced Array: ", myn2);
console.log("Original Array after Splice ", myArr);


