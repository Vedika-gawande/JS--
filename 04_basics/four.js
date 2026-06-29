//Normal function
const coding=["js","cpp","py","rb"]
// coding.forEach(function(value){
//     console.log(value);
// })

// coding.forEach((value)=>{
//     console.log(value);
// })

// function printMe(value){
//     console.log(value);
// }

// coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})