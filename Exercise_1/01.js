// Write a JavaScript program to display the current day and time in the following format.

let x = new Date();
let y 

const myArray = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"]

if (x.getHours < 12)
    y = "AM"
else y = "PM"

// or

if (x.getHours < 12){
    y = "AM"
}else if(x.getHours > 12){
    y = "PM"
}else{
    y = "12"
}

console.log("Today is : " + myArray[x.getDay()]+ "." )
console.log("currant time is : " + x.getHours() + " " + y + " : " + x.getMinutes() + " : " + x.getSeconds());