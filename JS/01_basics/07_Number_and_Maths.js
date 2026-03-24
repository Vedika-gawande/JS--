
//  Numbers
const number = new Number(100)
console.log(number)
console.log(number.toString().length)
const newNumber=123.45
console.log(newNumber.toPrecision(3))
const number3=100000
console.log(number3.toLocaleString('en-In'))
const number4=12.35
console.log(number4.toFixed(1))


// Maths
console.log(Math.abs(-10.54))
console.log(Math.round(5.888))
console.log(Math.floor(5.9))
console.log(Math.ceil(5.1))
console.log(Math.max(4,3,5,6))
console.log(Math.min(4,3,5,6))
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)