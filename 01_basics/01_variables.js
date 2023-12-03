const accountId = 144553
let accountEmail = "hitesh@gmail.com"
var accountPassword="12345"
accountCity = "Jaipur"
//accountCity = "Jaipur" // Should not be used
let accountState;

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.log(accountId)
console.table([accountEmail, accountPassword, accountCity, accountState])
