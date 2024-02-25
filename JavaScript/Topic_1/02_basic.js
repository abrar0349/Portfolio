// Conversion of variable

let str1 = '1';
let no1 = Number(str1)
console.log(typeof no1)

let no2 = 123;
let str2 = String(no2)
console.log(typeof str2)

let isLoggedIn = 'Hitesh'
let check = Boolean(isLoggedIn)
console.log(check , typeof check)



// **********************OPERATION***************************

// Operation is know to perform some operation on data and there are some type of operation like Arthmatic , logical operation etc.

console.log(+true)
console.log(+"")

console.log((3 + 4) * 5 % 3)

// Let's talk about some comeparasion operators 

console.log(1 == true) // true  
console.log(1 >= true) // true
console.log(1 >= true) // true   I can also check false which comarision is with 0.
console.log(1 < true)  // false
console.log(1 > true)  // false

console.log(Boolean({}))  //vs
console.log(Boolean(null))  
