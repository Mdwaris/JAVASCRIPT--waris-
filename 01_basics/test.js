//constant = that can not be change Ever
// Variable = it can change according to need
const accountId = "12345"
let accountEmail = "war@gamil"
var accountPassword = "0987"
accountCity = "gaya"

let accountState;

/*
NOTE = prefer not use Var
because of issue in block  scope and functional scope
*/
//accountId = 2 not allowed
console.log(accountId);
accountEmail = "war@gamil"
accountPassword = "098876"
accountCity = "jaipur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



