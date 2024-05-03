//----------------------------------------concat()---------------------------------------------------//
//concat() joins two or more strings

const name1 = " jenil"
const name2 = " gajera"
const name3 = name1.concat(" ", name2)

console.log(name3)

//Ex...

const text1 = " Hii"
const text2 = " I"
const text3 = " am"
const text4 = " a"
const text5 = " jenil"
const text6 = " gajera"

console.log(" ",text1, text2, text3, text4, text5, text6)
 
//Ex..

const ttext1 = " Hii"
const ttext2 = " I"
const ttext3 = " am"
const ttext4 = " a"
const ttext5 = " Jenil"
const ttext6 = " Gajera"

console.log(" ",ttext1, ttext2, ttext3, ttext4, ttext5, ttext6)


//-------------------------------trimStart()---------------------------------------//
// ECMAScript 2019 added the String method trimStart() to JavaScript.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.


let trim1 = " Hellow World!"
let trim2 = trim1.trimEnd()

console.log(trim2)

// -------------------------------trimEnd()-----------------------//
//ECMAScript 2019 added the string method trimEnd() to JavaScript.
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.


let trim3 = " jenil gajera!"
let trim4 = trim3.trimEnd()

console.log(trim4)