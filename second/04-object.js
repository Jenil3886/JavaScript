// singalton
// object.create

// object literals

// this is object

const mysym = Symbol("key1")

const jsuser = {
    name: "jenil",
    "full name": "jenilgajera",
    mysym: "mykey1",//this is symbol but is not wark in symbol 
    [mysym]: "mykey1",
    age: 18,
    location: "surat",
    email: "jenilgajera08@gmail.com",
    isLoogedIn: false,
    lastLogindays: ["monday", "saturday"]//this is arrys
}

// types of print

// first type
console.log(jsuser.email)

//second type
console.log(jsuser["email"])

console.log(jsuser["full name"])
console.log(jsuser["mysym"])
//this is right type of symbol run
console.log(jsuser[mysym])


// ----------------------------------------------------------------------------------//

// const a = 10
// const b = 20
// const c = 30
// const d = 35
// const e = 30

const arr = [10, 20, 30, 45, 30]

// console.log(c)
console.log(arr[2])

// const maths1 = 50
// const science1 = 45
// const socialScience1 = 48

// const maths2 = 40
// const science2 = 45
// const socialScience2 = 42

// const maths3 = 20
// const science3 = 44
// const socialScience3 = 48

const maths = [50, 40, 20]
const science = [45, 45, 44]
const socialScience = [48, 42, 48]

// console.log(socialScience2)
console.log(socialScience[2])

const people = ['John', 'Peter', 'Tony']
const booleans = [true, false, 40, 50.4, 'Rishi']

const student1 = {
    rollNo: 1,
    maths: 40,
    science: 45,
    socialScience: 48,
    abc: 'ajfhajk',
    jasdh: 'ashjfah',
    key: true,
}

const student2 = {
    rollNo: 2,
    maths: 40,
    science: 45,
    socialScience: 48,
}

console.log(student2.rollNo)
console.log(student2['rollNo'])

const variable = "gajera"

const a = "jenil variable" // double quotes
const b = 'jenil variable' // single quote, same as above
const c = `jenil ${variable}` // we can use dynamic variables

console.log(a)
console.log(b)
console.log(c)


