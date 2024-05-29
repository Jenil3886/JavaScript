// Loops can execute a block of code as long as a specified condition is true.

// while loop loops through a block of code as long as a specified condition is true.

let i = 0;

while (i < 10){
    console.log(i + 1);
    i++;
}

// If you forget to increase the variable used in the condition, the loop will never end.

/* do while loop is a variant of the while loop.This loop will execute the code block once, before checking
if the condition is true, then it will repeat the loop as long as the condition is true. */

let j = 0;

do {
    console.log(j + 1);
    j++;
} while (j < 10);

const array = ["ABCDEFG", "HIJKLMN", "OPQRSTU", "VWXYZ"];

let k = 0;

while (array[k]) {
    console.log(array[k]);
    k++;
}


////////////////////////////////////////////

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);