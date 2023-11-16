const name ="harshi"
const repoCount = 1

//console.log(name + repoCount + " value");    //harshi1 value
//string interpolision backtag
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harshi-hd-com');

console.log(gameName[0]);               //h
console.log(gameName.__proto__);        //{}

console.log(gameName.length);           //8
console.log(gameName.toUpperCase());    //HARSHIHD
console.log(gameName.charAt(2));        //r
console.log(gameName.indexOf('t'));     //2


const newString = gameName.substring(0,4)
console.log(newString);                          //hars  4th wil be executed.

const anotherString = gameName.slice(-8,4)
console.log(anotherString);                     //ars

const newStringOne ="    harshi    "
console.log(newStringOne);                  //   harshi    
console.log(newStringOne.trim());           //harshi

//replace

const url = "https://harshi.com/harshi%20d"

console.log(url.replace('%20', '-'));         //https://harshi.com/harshi-d

console.log(url.includes('harshi'));           //true

console.log(url.includes('dimple'));           //false

console.log(gameName.split('-'));               //['harshi','hd','com']
