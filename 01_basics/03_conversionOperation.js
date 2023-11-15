let score = "33abc"
//let score = "null"
//let score = null
//let score = undefined
//let score = true
//let score = false

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); // number
//console.log(valueInNumber); //NaN = not a number

/*
"33"=> 33
 "33abc" => NaN
 true => 1; false => 0
*/

//let isLoggedIn = 0        //false   
//let isLoggedIn = ""       //false
// let isLoggedIn = "hdhd"   //true
//let isLoggedIn = 1        //false

// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%2);

let str1 = "hey"
let str2 = " harshita!"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1+2+"2");        //ToPrimitive

 //console.log(true+);
// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+3

// let gameCounter = 100     //postfix
// gameCounter++;
// console.log(gameCounter);

let gameCounter = 100
++gameCounter;                  
console.log(gameCounter);
