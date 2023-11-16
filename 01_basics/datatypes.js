// primitive

//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//Number defined
const score = 100   // in js language is not defined.
const scoreValue = 100.3  

const isLoggedIn = false    // boolean type
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);    //false

const bigNumber = 446448659846595985n     //put n at last of big number then it is a bigInt number.

// Reference (Non primitive )

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];   //array

//objects = bet { } is an object

let myObj = {
    name: "harshi",               
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

/*      Types of value         result
         Undefined            "undefined"
         Null                  "object"
         Boolean               "boolean"
         Number                 "number"
         String                 "string"
        (all non primitive 
        dataType is)Function       "function"  or object function
         object                    "object"
        */


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//memory
// Stack  = get copy of ..(primitive), Heap = get reference ..make changes in original value (non primitive) 

//stack

let myYoutubename = "harshitadotcom"

let anothername = myYoutubename
anothername ="harshicode"

console.log(myYoutubename);
console.log(anothername);

//heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

uswerTwo.email = "harshii@google.com"

console.log(userOne.email);
console.log(userTwo.email);