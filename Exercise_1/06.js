// Write a JavaScript program to calculate the days left before Christmas.

const today = new Date();

const Christmas = new Date(today.getFullYear(), 11, 25)

if (today.getMonth == 11 && today.getDate > 25){
    Christmas.setFullYear =(today.getFullYear() + 1)
}

const one_day = 1000 * 60 * 60 * 24

console.log(`${Math.ceil((Christmas.getTime() - today.getTime()) / one_day)} Day left Before Christmas`)