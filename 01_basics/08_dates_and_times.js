// ***************Date Function***********************
let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())

// ***************Time Function***********************
let now=new Date()
console.log(now)
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getMonth())
console.log(now.getFullYear())
const fulldate=now.toLocaleString(`en-In`,{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:'numeric'
})
console.log(fulldate)
console.log(now.getHours())

const d = new Date(2026,0,26,10,30,0)
console.log(d)