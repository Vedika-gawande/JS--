const marvel=['thor','ironman']
const dc=['batman','superman ']

marvel.push(dc)
console.log(marvel)

const new_array=marvel.concat(dc)
console.log(new_array)

const all_new_hero=[...marvel,...dc]
console.log(all_new_hero)

const another_array=[1,2,3,[4,5,6],7,8,[8,6],9]
const real_array=another_array.flat(Infinity)
console.log(real_array)

console.log(Array.from("Vedika"));
console.log(Array.isArray("Vedika"));
console.log(Array.from({name:"Vedika"})); //intresting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score2))