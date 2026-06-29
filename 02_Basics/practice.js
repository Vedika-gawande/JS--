// const myarr=[1,2,3,4,5]
// console.log(myarr[0])
// console.log(myarr[myarr.length-1])
// console.log(myarr.length)
// myarr.push(6)
// myarr.unshift(0)
// myarr.pop()
// myarr.shift()
// console.log(myarr)

let arry = [2, 4, 6, 8, 10]
// for(i=0;i<arry.length;i++){
//     console.log(arry[i]);
// }

// let marr = [2, 4, 6, 8, 10]
// let sum=0
// for(i=0;i<marr.length;i++){
//     sum=sum+marr[i]
// }
// console.log(sum)

// let max=arry[0]
// for(let i=0;i<arry.length;i++){
//     if(arry[i]>max){
//         max=arry[i];
//     }
// }
// console.log(max)

// for(let i=arry.length-1;i>=0;i--){
//     console.log(arry[i])
// }

// let count=0
// for(let i=0;i<arry.length;i++){
//     if(arry[i]%2==0){
//         count++;
//     }
// }
// console.log(count)

// let nums = [1,2,3,2,4,1,5];
// let unique=[]
// for(let i=0;i<nums.length;i++){
//     if(!unique.includes(nums[i])){
//         unique.push(nums[i])
//     }
// }
// console.log(unique)

// let marr = [2, 4, 6, 8, 10]
// issorted=true
// for(i=0;i<marr.length;i++){
//     if(marr[i]>marr[i+1]){
//         issorted=false
//     }
// }
// if(issorted)
//     console.log("sorted")
// else
//     console.log("not sorted")


let marr = [2, 4, 6, 8, 10]
issorted=true
for(i=0;i<marr.length-1;i++){
    if(marr[i]<marr[i+1]){
        issorted=false
    }
}
if(issorted)
    console.log("not sorted")
else
    console.log(" sorted")