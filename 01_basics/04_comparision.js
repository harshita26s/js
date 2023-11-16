// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);    //true
// console.log("02" > 1);   //true

// below type of comparision can put u in confusion so avoid those types.
console.log(null > 0);        //false
console.log(null == 0);      //null converted to 0
console.log(null >= 0);      //true

// the reason is that an equality check == and comparisions < > >= <= work differently.
// Comparisions convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and > 0 is false.

console.log(undefined == 0);    //false
console.log(undefined < 0);    //false
console.log(undefined > 0);    //false

// ==  comparision
// ===

console.log("2" === 2);         //false
// it will check it's dataType also.

