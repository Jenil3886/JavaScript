const marvel_heros = ["thor", "ironmen", "spidermen"];
const dc_heros = ["supermen", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros] // spred operator
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // flat() no use erray ni ander jetala pan sub-erray hoy ae badha ne aekaj erray ma add kari dey
// No, it will merge all the sub-arrays within the array into a single array

console.log(real_another_array)

console.log(Array.isArray("Jenil"))
console.log(Array.from("Jenil"))
console.log(Array.from({ name: "Jenil" }))

let Stat = 85
let Account = 89
let Economics = 90
let English = 70
let SP = 75
let BA = 80
let Gujarati = 73


console.log(Array.of(Stat, Account, Economics, English, SP, BA, Gujarati))