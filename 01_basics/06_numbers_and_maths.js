const score = 400

console.log(score);  //automatically number

const balance = new Number(100)

console.log(balance);  // caste it to a number

console.log(balance.toString()); /// less property in number so to caste it to string to takes more properties

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // for precision purpose

const otherNumber =23.8956

console.log(otherNumber.toPrecision(3));


const otherNumber2 =123.8956

console.log(otherNumber2.toPrecision(3));


const hundred = 100000

console.log(hundred.toLocaleString());  // by default US system 
console.log(hundred.toLocaleString('en-IN'));  // for indian number system


/******************************MATHS****************************/


console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.3).toPrecision(2));


console.log(Math.min(-4,3,7,9,0,3));


console.log(Math.random());  //always give values in between 0-1

console.log(Math.random() * 10);

console.log((Math.random() * 10).toPrecision(1));
//OR
console.log(Math.floor(Math.random() * 10)+1);

console.log((Math.random() * 10 )+ 1);


const min = 10 
const max  =20 

console.log(Math.floor(Math.random() * (max-min + 1)) + min)


