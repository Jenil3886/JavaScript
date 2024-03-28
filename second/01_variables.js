// A java script variable is a simpaly a name of stroge location

// local varible is can only use inside a block of code
// golble variable is can be use anywry in the programs 

var value = 10;
var _value = 20;
var $value = 30;
var value1 = 40;  // these all are valid

var a = 24; // this is a globle variable which can be accessed anywhere in the program

function myFunction1() {
    var b = 15 // this is a local variiable which can be accessed only in the function 
    console.log(b)
}

function myFunction2() {
    // to declare JavaScript globle variable in side function, you need to use window object.

    var c = 25
    window.value = 4096
}

// we can declere variable whith 3 types : var, let, const

// var was used to declare variables earlier version of javascript
// now, we use let & const more ferquently
// const value can't be changed as let can value can be changed

// var can globally scoped while let & const are block scope

var a = 10
let b = 20
const c = 30

{
    console.log(a)
    console.log(b)
    console.log(c)
}

// lets have a reversed condition

{
    var d = 100
    let e = 200
    const f = 300
}

console.log(d)
// console.log(e)  // this won't work as we've declered let value in block 
// console.log(f) // rhis won't work as we've declered const value in block

{
    var g = 1000
    let h = 2000
    const i = 3000
}

console.log(g)
// console.log(h) this will not work
// console.log(i) this will not work

// var can be updeted & re-declered whithin its scope

var j = 10000
var j = 20000

let k = 30000
k = 40000
// let k = 40000; let can't be re-declared but its value can be changed  

const l = 50000
// const l = 60000; const can neither be re-declared nor its value can be 

console.log(j)
console.log(k)
console.log(l)

// const must be initialized druing declaration unlike var & let

var m;
m = 10

let n;
n = 20

// const o; must be initialized druing declaration
// o = 30

console.log(m)
console.log(n)
// console.log(o)

p = 100
var p

// q = 200 this will not work
// let q

console.log(p)
// console.log(q)

// we can access var before its decleration but its value must be initialized first

r = 1000
console.log(r)
var r

// s = 2000;
// console.log(s); let can't be accessed before its declaration
// let s;