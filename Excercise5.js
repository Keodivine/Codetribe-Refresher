
console.log("Task 1: Print numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("Task 2: Calculate the sum of all numbers from 1 to 100 and print the result");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100 is:", sum);


console.log("Task 3: Prompt the user to enter a number greater than 10");
let userNumber;
do {
    userNumber = parseInt(prompt("Please enter a number greater than 10:"), 10);
} while (isNaN(userNumber) || userNumber <= 10);
console.log("You entered a valid number:", userNumber);


console.log("Task 4: Create a simple guessing game");
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);
    if (guess !== correctNumber) {
        console.log("Incorrect guess, try again.");
    }
} while (guess !== correctNumber);
console.log("Congratulations! You guessed the correct number:", correctNumber);
