//numbers
let score="33aa" //original number but as string
console.log(typeof score)//Return string becuase of " "
newScore=Number(score)//Conversion into number
console.log(newScore) //Return NaN because of original no is string
console.log(typeof newScore)//Return number beacuse of conversion

//Boolean
let value1=1
console.log(typeof value1)
newValue1=Boolean(value1)
console.log(newValue1)
let value3=0
console.log(typeof value3)
newValue3=Boolean(value3)
console.log(newValue3)
newValue4=Boolean(value3)
console.log(newValue4)
let value5="vedika"
console.log(Boolean(value5))
//if value is 1  = true
//if value is 0  = false
//if value is "" = false
//if value is string and converted into boolean =true

//String conversion
let someNum=33
let newNum=String(someNum)
console.log(newNum)
console.log(typeof newNum)