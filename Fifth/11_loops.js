for (let a = 1; a <=10; a++) {
    // console.log(`outerLoopValue ${a}`);
    for (let b = 1; b <= 10; b++) {
        // console.log(`${a} * ${b} = ${a*b}`);
    } 
}

let myArray = ['jenil','darshan','parth','prince','jaydeep']
// console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// breack and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected is 5`)
        break
    }    
    console.log(`value of is ${index}`);
}


for (let index = 1; index <= 20; index++) {
if(index == 5){
        console.log(`Detected is 5`)
        continue
    }    
    console.log(`value of is ${index}`);
}



let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray2 = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray2.length) {
    //console.log(`Value is ${myArray2[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

 


