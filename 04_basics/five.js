const newAry=[1,2,3,4,5,6,7,8]

// const newNum=newAry.filter((num)=>{
//     return num;
// })
// console.log(newNum)

// const newNum=newAry.filter((nums)=>{
//     return nums>4
// })
// console.log(newNum)

// const ary=[]
// newAry.forEach((nums)=>{
//     if(nums>4){
//         ary.push(nums);
//     }
// })
// console.log(ary)

const myBooks = [
    {
        title: "Book one",
        genre: "non-fiction",
        publish: 2009,
        edition: 2000
    },
    {
        title: "Book two",
        genre: "fiction",
        publish: 1987,
        edition: 2004
    },
    {
        title: "Book three",
        genre: "history",
        publish: 1999,
        edition: 2012
    },
    {
        title: "Book four",
        genre: "science",
        publish: 1987,
        edition: 2003
    },
    {
        title: "Book five",
        genre: "non-fiction",
        publish: 2009,
        edition: 2010
    },
    {
        title: "Book six",
        genre: "fiction",
        publish: 2009,
        edition: 2011
    }
];

let userBooks = myBooks.filter((bk) => {
    return bk.genre === "fiction" && bk.publish >= 2000;
});

console.log(userBooks);