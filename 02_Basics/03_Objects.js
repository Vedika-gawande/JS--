
const mysym=Symbol("key1");
const jsuser={
    name:"vedika",
    email:"vedika@gmail.com",
    [mysym]:"mykey1",
    age:19,
    location:"ner",
    isLoggedIn:false,
    lastLoginDays:["Monday","Wednesday"]
}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser[mysym])

// jsuser.email="vedika@microsoft.com"
//Object.freeze(jsuser)
// jsuser.email="vedika@ibm.com"
// console.log(jsuser)

jsuser.greeting=function(){
    console.log("Hello js user")
}
jsuser.greeting()

jsuser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`)
}
jsuser.greetingTwo()