let str = "ipsum dolor sit amet";
let words = str.split(" ");

let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

console.log(capitalizedWords); 