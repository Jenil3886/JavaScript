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



