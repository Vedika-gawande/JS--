const tinderUser={}
tinderUser.id=101
tinderUser.email="vedika@gmail.com"
tinderUser.isLoggedIn=true
console.log(tinderUser)

// const regularUser={
//     fullname:{
//         userfullname:{
//             firstname:"vedika",
//             lastname:"gawande"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname)

// const obj1={1:"a",2:'b'}
// const obj2={3:"a",4:'b'}
// const obj3={...obj1,...obj2}
// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('id'))

const course={
    name:"js in hindi",
    instructor:"vedika",
    fees:"free"
}
const {instructor:ins} = course
console.log(ins) 