
console.log("Task 1: Print numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("Task 2: Print all even numbers between 1 and 20");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Task 3: Calculate the sum of all numbers from 1 to 100 and print the result");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100 is:", sum);


console.log("Task 4: Print all multiples of 5 less than 50");
for (let i = 1; i < 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
