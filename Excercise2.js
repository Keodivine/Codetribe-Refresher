
let num1 = 5;
let num2 = 10;

let isGreater = num1 > num2;
let isLessOrEqual = num1 <= num2;
let isEqual = num1 === num2;
let isNotEqual = num1 !== num2;

console.log("num1 > num2: " + isGreater);
console.log("num1 <= num2: " + isLessOrEqual);
console.log("num1 === num2: " + isEqual);
console.log("num1 !== num2: " + isNotEqual);


let x = 8;
let y = 12;


console.log("x > y: " + (x > y)); 
console.log("x <= y: " + (x <= y)); 
console.log("x === y: " + (x === y)); 
console.log("x !== y: " + (x !== y)); 


let a = true;
let b = false;

console.log("a AND b: " + (a && b)); // a AND b
console.log("a OR b: " + (a || b)); // a OR b
console.log("NOT a: " + (!a)); // NOT a


let p = 10;

p += 5;
console.log("p += 5: " + p);

p -= 3;
console.log("p -= 3: " + p);

p *= 2;
console.log("p *= 2: " + p);

p /= 4;
console.log("p /= 4: " + p);

p %= 3;
console.log("p %= 3: " + p);
