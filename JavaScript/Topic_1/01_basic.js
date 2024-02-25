"use strict" //  this well treate js file as new version

var khan = 'anything';
var khan = 'anything2';  // var allows redeclaration in the same scope
console.log(khan);  // Output: anything2

let khan1 = 'anything';
// let khan1 = 'anything2'; // This would cause an error, as let doesn't allow redeclaration
console.log(khan1);  // Output: anything

const khan3 = 'contain variable'; // const doesn't allow reassignment
// const khan3 = 'new value'; // This would cause an error
console.log(khan3);  // Output: contain variable


 
// there have some type of primitive data type which I write the following.

let first = 'string';  // I can also write the data type like 
let first2 = new String(first)  // And remmber that string is immutable
let two = 12;
let three = BigInt(56)
let four = true
let five = null;
let sex;
console.log(typeof first) // Output: String
console.log(typeof two)  // Output: number
console.log(typeof three)  // Output: bigint
console.log(typeof four)   // Output: boolean
console.log(typeof five)  // Output: object because it specially data type it's mean meanty object.
console.log(typeof six)  // Output: undefinde mean nothing have assign value to it.

// There have refrence data type too which is include Array Obj and Function






