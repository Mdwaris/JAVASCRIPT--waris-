//Strings are useful for holding data that can be represented in text form. 
// Some of the most-used operations on strings are to check their length, 
// to build and concatenate them using the + and += string operators, 
// checking for the existence or location of substrings with the indexOf() method,
//  or extracting substrings with the substring() method

const name = " waris "

const repoCount = 50
// console.log(name + repocons + "value") -> old method to write  code

console.log(`my name is ${name} and my repo Count is ${repoCount}`);


const gameName = new String('khan-waris')

console.log(gameName[0]);
console.log(gameName.__Proto__);


//////////////////////////////////////METHOD/////////////////////////////////
console.log(gameName.length);


console.log(gameName[0]);
console.log(gameName.__Proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  // use to find the character at the given point 
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,5) // agay substring mai hum -ve value dete hai too wo ignore kar deyta hai  or wo "0" se start kar ta hai
console.log(newString);


const anotherString = gameName.slice(-9,2)   // slice main agar hum -ve nuber dete hai wo too reverse akr deta hai
console.log(anotherString);



//////////////////////////////////IMPORTANT METHODS ///////////////////////
// 1. => trim ex
const newStringOne = "      saquib     "
console.log(newStringOne);
console.log(newStringOne.trim());







const url = "https://waris.com/waris%20khan"

console.log(url.replace('%20','_'))

console.log(url.includes('khan'))
console.log(url.includes('ahmad'))


// 3=> split methods

console.log(gameName.split('-'));