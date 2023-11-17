//number

const score = 400
console.log(score);          //400

const balance = new Number(100)
console.log(balance);             //[Number: 100]

console.log(balance.toString().length);      //3
console.log(balance.toFixed(2));             //100.00

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));     //23.9

const otherNumberv = 123.8966
console.log(otherNumberv.toPrecision(3));     //124

const otherNumbe = 1123.8966
console.log(otherNumbe.toPrecision(3));     //1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString());     //1,000,000   //in US value

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));     //10,00,000  //in Indian value

// Number.max_value  //min_value  //etc

// +++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);                //object [Math] {}
console.log(Math.abs(-4));         //4
console.log(Math.round(4.6));      //5
console.log(Math.ceil(4.2));       //5
console.log(Math.floor(4.9));       //4
console.log(Math.sqrt(5));          //25

console.log(Math.min(4,3,6,8));       //3
console.log(Math.max(4,3,6,8));       //8
//math.random

console.log(Math.random());            // always in bet 0 and 1  //0.9087860150606852
console.log((Math.random()*10) + 1);
console.log((Math.floor(Math.random()*10)) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max - min + 1)) + min);