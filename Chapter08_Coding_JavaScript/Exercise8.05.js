/*
* Michael Harrison.
* 08/12/2019
*
* Packt The MongoDB Workshop
* Chapter 8
*/

// Excercise code for Packt MongoDB For Begginers.
// This code can be run using NodeJS, make sure you have the MongoDB node driver installed with NPM before running.

//// TOPIC E: "Input handling with the NodeJS."
// Excercise 5: Input handling with NodeJS.

const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var choice;
var user;
var cinema;

const login = function() {
    interface.question("Hello, what is your name?", (name) => {
        user = name;
        prompt();
      });
}
const who = function () {
    console.log(`User is ${user}`)
    prompt();
}
const prompt = function() {
    interface.question("login, who OR exit?", (input) => {
        if(input === "exit") {
            return interface.close(); // Will kill the loop.
        }   
        if(input === "login") {
            login();
        }
        if(input === "who") {
            who();
        }
      });
}
prompt();
