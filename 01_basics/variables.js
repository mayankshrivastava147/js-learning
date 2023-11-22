const accountId = 144553
let accountEmail= "mayank@google.com"
var accountPassword= "12345"
accountCity='Bhopal'


//accountId=2 // not allowed

console.log(accountId);


accountEmail='mayank@hotmail.com'
accountPassword='54321'
accountCity='Pune'
let accountState

console.table([accountEmail,accountPassword,accountCity,accountState
])

/*
Prefer not to use var because of issue in block scope and functional scope
*/

