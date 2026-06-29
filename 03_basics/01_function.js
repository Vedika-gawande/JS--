// default function
// function add(){
//     return 5+3
// }
// const add1 =add()
// console.log(add1)

// paramterized function
// function mul(number1,number2){
//     return number1*number2
// }
// console.log(mul(9,10))

// function isLogged(username="bittu"){
//     return `${username} just logged in`
// }
// console.log(isLogged("vedika"))

// const myObject={
//     name:"vedika",
//     rollno:18
// }

// function getObjectDetails(getObject){
// console.log(`hello, my name is ${getObject.name} and rollno  is ${getObject.rollno}`)
// }

// getObjectDetails(myObject)

// const myArray=[10,20,30]
// function retrivemyArray(aryobj){
//     return aryobj[1];
// }
// // console.log(retrivemyArray(myArray));
// console.log(retrivemyArray([10,20,30,40]))

function returnNum(val1,val2,...num){
    return num;
}
console.log(returnNum(10,20,30,40))