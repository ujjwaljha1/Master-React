/*
Read data from the user
*/ 

// Import the readline-sync package to allow reading input from the user synchronously
const readline = require("readline-sync");

// Prompt the user to enter their name and store it in the variable 'username'
const username = readline.question("May I know your name? ");

// Prompt the user to enter their age and store it in the variable 'userage'
const userage = readline.question("May I know your age: ");

// Log the type of the variable 'userage' to the console, which will be a string since input from readline-sync is always a string
console.log(typeof userage);

// Greet the user by concatenating their name with the welcome message and log it to the console
console.log("Welcome " + username + " to my profile");

// Greet the user again using template literals for easier string interpolation and log it to the console
console.log(`Welcome ${username} to my profile`);

// Calculate the user's year of birth by subtracting their age from the current year (2022), converting the age from a string to a number
const yearofbirth = 2022 - Number(userage);

// Log the user's year of birth to the console using template literals for easier string interpolation
console.log(`You were born in the year ${yearofbirth}`);
