/*
 * Michael Harrison.
 * 08/12/2019
 *
 * Packt The MongoDB Workshop
 * Chapter 8
 */

// Excercise code for Packt MongoDB For Begginers.
// This code can be run using NodeJS, make sure you have the MongoDB node driver installed with NPM before running.

//// TOPIC B: "Simple Queries with the Driver."
// Excercise 2: Simple Queries with the NodeJS Driver.
const MongoClient = require('mongodb').MongoClient;
const url = process.env.ATLAS_URI; // Passed in as an environment variable.
const client = new MongoClient(url);

const databaseName = 'sample_mflix';
const collectionName = 'movies';

const query = { genres: { $all: ['Romance'] } };

// Open the connection using the .connect function.
client.connect(function (err) {
  // Within the connection block, add a console.log to confirm the connection
  console.log('Connected to MongoDB with NodeJS!');

  const database = client.db(databaseName);
  database
    .collection(collectionName)
    .find(query)
    .limit(2)
    .project({ title: 1 })
    .each(function (err, doc) {
      if (doc) {
        console.log('Current doc');
        console.log(doc);
      } else {
        client.close(); // Close our connection.
        return false; // End the each loop.
      }
    });
});
