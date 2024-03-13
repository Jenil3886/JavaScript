//differencre between let var const


// 1 re-declaration

var a = 10
var a = 20

let b = 20
// let b = 30 error

const c = 40
// const c = 50 error

// 2 re-assignment

var d = 10
d = 20
console.log(d)

let e = 10
e = 20
console.log(e)

const f = 10

// f = 20 error
console.log(f)

// 3 hoisting

g = 10
console.log(g)
var g

// let and const are not hoisted

// 4 const must be assigned during declaration

var h
h = 10

let i
i = 30

const j = 10

// scope

{
    var k = 10
    let l = 20 
    const m = 30 
}

console.log(k)
// console.log(l) error
// console.log(m) error
