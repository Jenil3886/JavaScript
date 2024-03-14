
//----------------------string.slice()----------------------------//

// The method takes 2 parameters: start position, and end position (end not included).
let fruit = "maylo, Jayraj, umo"
let riya = fruit.slice(7, 13)

console.log(riya)

// const  jenil = 'maylo, jayraj, umo'    //
// let rajnit = jenil.slice(7,13)         //   this is not right way in print in string.slice()
//
// console.log(rajanit)                   //

const text = "jenil, sanket, darshan"
const parth = text.slice(-12)

console.log(parth)



const apple = "Apple, Banana, Kiwi"
const jenil = apple.slice(-12)

console.log(jenil)

const banana = 'Apple, Banana, Kiwi'
const jenill = apple.slice(-12)

console.log(jenill)


//------------------------------substring() --------------------------------------------//

//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().

const teext = "apple, banana, kivi"
const part = teext.substring(7, 13)

console.log(part)

// -------------------------------substr()---------------------------------------------//

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

const kivi = "apple, banana, kivi"
const paart = kivi.substr(7, 6)

console.log(paart)

function abc () {
    console.log('sjdhfskjf')
}

abc()

kivi.includes()