/*
 * Michael Harrison.
 * 08/12/2019
 *
 * Packt The MongoDB Workshop
 * Chapter 8
 */

// Excercise code for Packt MongoDB For Begginers.
// This code can be run using NodeJS, make sure you have the MongoDB node driver installed with NPM before running.

//// TOPIC A: "Connecting with the Driver."
// Excercise 1: Creating a connection with the NodeJS Driver.

// Import MongoDB Driver module.
const MongoClient = require('mongodb').MongoClient;

// Create a new url variable.
const url = process.env.ATLAS_URI; // Passed in as an environment variable.
// Create a new MongoClient.
const client = new MongoClient(url);

// Open the connection using the .connect function.
client.connect(function (err) {
  // Within the connection block, add a console.log to confirm the connection
  console.log('Connected to MongoDB with NodeJS!');
  client.close(); // Close our connection at the end.
});
