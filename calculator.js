// console.log("Hi i am Aman");

//in NodeJs each file act as a module

function add(a,b){
    console.log(a+b);
}
const sub=(a,b)=>console.log(a-b);
const mul=(a,b)=>console.log(a*b);
const div=(a,b)=>console.log(a/b);

module.exports={
    addition:add,
    subtraction:sub,
    multiplication:mul,
    division:div
}
