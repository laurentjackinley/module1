// Create a new file called password.js. Write a program that does the following:
// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user

const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
reader.question("Welcome to the password validator, Please enter your password?", function(input){
    tokens = input.split(' ');
password = tokens[0];
    if (input.length < 10) {
        console.log("Your password is invalid")
    } else if (input.length > 12) {
        console.log("Your password should not have more than twelve characters")
    }
    else {
        console.log("Congratulations your password has been validated")
    }
  })