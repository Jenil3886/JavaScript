// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1])


// Array Methods

// myArr.push(6)   // the value is added last
// myArr.push(7)   // the value is added last 
// myArr.pop()     // last value is deleted

// myArr.unshift(9)  // the value is added first
// myArr.shift()     // first value is deleted

// console.log(myArr.includes(9))  // answer is boolean  // false 
// console.log(myArr.indexOf(3))   // answer is index number // 3

// const newArr = myArr.join() // join() data converting in string
// const newArr2 = myArr.join("*")  //  0*1*2*3*4*5

// console.log(myArr)  // answer type of object // [0, 1, 2, 3, 4, 5]
// console.log(newArr) // answer type of string // 0, 1, 2, 3, 4, 5

// slice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)

console.log(myn2)
console.log("C", myArr)

const myn3 = myArr.splice(2, 0, "jenil", "gajera")
console.log(myn3)
console.log("D",myArr)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit = fruits.at(3);

console.log(fruit)
console.log(fruits)