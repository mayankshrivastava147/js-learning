// Primitive (call by value)

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint


// Non Primitive (reference)

// Array, Objects, Functions

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outSideTemp = null 

let userEmail;  // or let userEmial=undefined;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id===anotherId);

console.log(typeof(id))



const bigNumber =35456747908323575563476745n



/****************ARRAYS*************/





const heros = ['Shaktiman','nagraj','doga']




/*************OBJECT****************/

let myObj ={
    name:"Mayank",
    city:"Bhopal",
    country:"India"
}



/****************FUNCTION*********************/



const myFunction = function(){
      console.log("Hello world")
}



console.log(typeof(outSideTemp))
console.log(typeof(myFunction))
console.log(typeof(myObj))
console.log(typeof(bigNumber))