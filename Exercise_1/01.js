let x = new Date();
let y 

const myArray = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"]

if (x.getHours < 12)
    y = "AM"
else y = "PM"

console.log("Today is : " + myArray[x.getDay()]+ "." )
console.log("currant time is : " + x.getHours() + " " + y + " : " + x.getMinutes() + " : " + x.getSeconds());