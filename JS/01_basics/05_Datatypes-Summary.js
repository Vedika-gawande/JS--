//Primitive Datatypes -Call by value
//Datatypes : String, Number, Null, Undefined, Boolean, Symbol, BigInt
const myName="vedika"
console.log(typeof (myName)); //string
const number=1234
console.log(typeof (number)); //number
const isLoggedIn=true
console.log(typeof (isLoggedIn)); //boolean
const temp=null
console.log(typeof (temp));//object
let value
console.log(typeof (value));//undefined
const id=Symbol(123)
const anotherId=Symbol(123)
console.log(id==anotherId)//false
console.log(typeof(id))//symbol

//Non primitive data types call by reference
//Types : Array, Object, Function
const names=['vedu','vanshu']
console.log(typeof names);//Object

let myInfo={
    name:"vedika",
    age:19,
    rollno:2
}
console.log(typeof myInfo)//Object

let myFun=function(){
    console.log("Hello")
}
console.log(typeof myFun) //Object func