// Reduce
const myNums=[1,2,3,4]
// const initial = 0

const myTotal=myNums.reduce((acc,currval)=>{
    // console.log(`currval: ${currval} , acc:${acc}`)
    return acc+currval;
},0)

// console.log(myTotal);

const shopCart=[{
    itemName:"js course",
    price:2000
},
{
    itemName:"py course",
    price:3000
},
{
    itemName:"mobile dev course",
    price:12000
},
{
    itemName:"ds course",
    price:5000
},
]

const mycart=shopCart.reduce((acc,item)=>acc+item.price,0)
console.log(mycart)