// IIFE (Immediately Invoked Fucntion Expression) 
// It is used to control the pollution from global varaibales or function
(
    function chai(){ // named iifi
        console.log("DB Connected")
    }
)();

((name)=>{
    console.log(`Db connected to ${name}`)
})(`vedika`)