// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

let x = 5;
let y = 6; 
let z = 7;

let perimeter = x + y + z;

let s = perimeter / 2;

let area = Math.sqrt(s * (s - x) * (s - y)* (s - z)).toFixed(2);

console.log("area of the triangle is : " + area)