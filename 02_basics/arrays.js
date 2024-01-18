// arrays

const myArr = [0,1,2,3,4,5]
// console.log(myArr[0])

const myHero=['shaktiman','nagraj']

const myArr2= new Array(1,2,3,4,5)

// console.log(myArr2[2]);



// Array method

// myArr.push(6)
// console.log(myArr)


// myArr.push(7)
// console.log(myArr);


// myArr.pop()
// console.log(myArr);


// myArr.unshift(9)              //add value in the starting
// console.log(myArr);


// myArr.shift()               // remove value at starting
// console.log(myArr);



// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


const newArr = myArr.join()

// console.log(myArr);
//  console.log(newArr);
// console.log(typeof newArry);


//*********************************************Slice, Splice************************************//

//  console.log("A ", myArr);

// const myn1 = myArr.slice(1,3)     // didnt aFFect original array


//  console.log("mynewArray",myn1);
//  console.log("B ", myArr);

// const myn2 = myArr.splice(1,3)     //  affects original array

//  console.log("mynewArray2",myn2);
//  console.log("C ", myArr);



const marvel_heros = ['thor','ironman','spiderman']
const dc_heros = ['superman','flash','batman']



//  marvel_heros.push(dc_heros)   // push on existing array

// console.log(marvel_heros);
//  console.log(marvel_heros[3][2]);



myNewheros = marvel_heros.concat(dc_heros)  // concat append and give new array
//console.log(myNewheros);


// spread operator
const all_new_heros = [...marvel_heros,...dc_heros]  // ... spreads arrays
//console.log(all_new_heros);


// indepth array solution 


const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArr.flat(Infinity)

console.log(real_another_array);




// data scraping


console.log(Array.isArray('Mayank'));
console.log(Array.from('Mayank'));
console.log(Array.from({name: 'Mayank'}));  // intresting ----- give empty array untill we explicitly tell key or value

let score1 = 100
let score2 = 200
let score3 = 300


//console.log(Array.of(score1,score2,score3));






