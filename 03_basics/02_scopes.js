// function one(){
//     const num1=10; //local variable limited to scope  
//     console.log(num1);
// }
// one();
// console.log(num1);
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {}, 1000);
    console.log(i);
}

console.log(y);
let y = 5;
// if there is let ReferenceError: Cannot access 'y' before initialization
//let (NOT allowed)

console.log(x);
var x = 5;
// undefined Redeclaration
// var (Allowed – dangerous)