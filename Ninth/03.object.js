// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const mySymbol = Symbol("key2")

const JsUser = {
    name: "Jenil",
    "full name":"Jenil Gajera",
    mySym:"myKey1", // this is not a symbol
    [mySymbol]:"myKey2",  // this is a symbol
    age: 18,
    location: "surat",
    email: "jenilgajera@microsoft.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser.mySym)
console.log(JsUser[mySymbol])

// how to object value change
JsUser.email = "jenilgajera08@google.com"
console.log(JsUser)

// how to freeze object value 
Object.freeze(JsUser) 
JsUser.email = "jenilgajera08@chatgpt.com"
console.log(JsUser)

