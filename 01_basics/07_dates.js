// dates

let myDate = new Date()

console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof(myDate))



let myCreateddate = new Date(2023,0,23)
console.log(myCreateddate)
console.log(myCreateddate.toDateString())

let myCreateddate2 = new Date(2023,0,23,5,6)  // 1st way to create time with time
console.log(myCreateddate2.toLocaleString())



let myCreateddate3 = new Date("2023-01-14")   // by own US format
console.log(myCreateddate3.toLocaleString())


let myCreateddate4 = new Date("01-14-2023")    //date by own choice with ind format
console.log(myCreateddate4.toLocaleString())


let myTimeStamp =Date.now()    //current date 

console.log(myTimeStamp);
console.log(myCreateddate4.getTime())


console.log(Math.floor(Date.now())/1000);   //seconds

let newDate =new Date()

console.log(newDate);

console.log(newDate.getMonth());
console.log(newDate.getDay());  // get 6 because its sat and it start from monday


// `${newDate.getMonth()} and time is


newDate.toLocaleString('default', { 
   weekday: "long"

})