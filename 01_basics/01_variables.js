const accountId = 144553   
let accountEmail = "harshita@google.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState
// if variable is declared and value is not given than js shows undeffined as value.
// accountId = 2 // not allowed

accountEmail ="hd@email.com"
accountPassword ="252424"
accountCity = "dewas"

console.log(accountId);
/*
Prefar not to use var
because of issue in block scope and functional scope
*/
console.table([accountCity, accountEmail, accountPassword, accountId, accountState])
