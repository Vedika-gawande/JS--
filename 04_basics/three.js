// for of
// arr=[10,20,30,40]
// for(const i of arr){
//     // console.log(i)
// }

const name="vedika gawande"
for(const n of name){
    // console.log(`Letters of name are ${n}`)
    // console.log(n)
}

//Maps

const map = new Map();
map.set("IN","India")
map.set("Fr","France")
map.set("Ch","China")
// console.log(map)

// for(const [key,value] of map){
//     console.log(key,"->", value)
// }

// object iteration

// myobj={
//     "name1": "vedika",
//     "name2": "vedu"
// }
// for(const i of myobj){
//     console.log(i)
// }


myObject={
    "js":"javascript",
    "py":"python",
    "c++":"cpp"
}

for(const obj in myObject){
    // console.log(`full form of ${obj} is ${myObject[obj]}`);
}


const arr=[10,20,30,40]
for(const i in arr){
    //console.log(arr[i]);
}

const mycoding=[
    {
        languageName:"javscript",
        langaugeFile:"js"
    },
    {
        languageName:"java",
        langaugeFile:"java"
    },
    {
        languageName:"python",
        langaugeFile:"py"
    }
]
mycoding.forEach((items)=>{
    console.log(`${items.languageName} and file name is ${items.langaugeFile}`)
})