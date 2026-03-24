// const user={
//     username:"vedika",
//     age:20,
//     welcomeMessage: function(){
//         console.log(`Hello ,${this.username} welcome back`);
//         // console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username="veduu"
// user.welcomeMessage()
// console.log(this);


// ########### Global Object is window in browser ############ 

// const func1=function(){
//     username="vedika",
//     console.log(this.username); //has its own this
// }
// func1()

// const func2=()=>{
//     let username="vedika"
//     console.log(this.username) //dont have this take from surrounding print {undefined}
// }
// func2()


// const addTwo=(num1,num2)=>{
    // return num1+num2        //explicit return
// }
// console.log(addTwo(4,5))

// const addTwo=(num1,num2)=> (num1+num2) //implicit return
// console.log(addTwo(4,5))

const addTwo=(num1,num2)=>({username:"vedika"})
console.log(addTwo(4,5))