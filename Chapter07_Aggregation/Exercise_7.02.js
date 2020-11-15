/*
* Michael Harrison.
* 04/10/2019
*
* Packt MongoDB For Begginers.
* Chapter 7
*/

// Excercise code for Packt MongoDB For Begginers.
// This code can be run directly against the MongoDB Shell in interactive mode, or
// Can be run as a file like below:
// mongo "mongodb+srv://myAtlasCluster-fawxo.gcp.mongodb.net/sample_mflix" --username $USERNAME --password $PASSWORD .\Excercise_1_Code.js

// Exercise 2: Aggregation Structure

// Taking the pipeline from Exercise 7.01.
// Swap stages to improve efficiency:
var pipeline = [
  { $match: {
      genres: {$in: ["Romance"]}, // Romance movies only.
      released: {$lte: new ISODate("2001-01-01T00:00:00Z") }}},
  { $sort:  {"imdb.rating": -1}}, // Sort by IMDB rating.
  { $limit: 3},                 // Limit to 3 results.
  { $project: { genres: 1, released: 1, "imdb.rating": 1}}
];

// Add movie title to projection.
// Ch7_Exercise2.js
var pipeline = [
      { $match: {
          genres: {$in: ["Romance"]}, // Romance movies only.
          released: {$lte: new ISODate("2001-01-01T00:00:00Z") }}},
      { $sort: {"imdb.rating": -1}}, // Sort by IMDB rating.
      { $limit: 3 },     // Limit to 3 results.
      { $project: { title: 1, genres: 1, released: 1, "imdb.rating": 1}}
  ];

 
// Final pipeline will look like this.
var findTopRomanceMovies = function() {
  print("Finding top Classic Romance Movies...");
  var pipeline = [
      { $match: {
          genres: {$in: ["Romance"]}, // Romance movies only.
          released: {$lte: new ISODate("2001-01-01T00:00:00Z") }}},
      { $sort:  {"imdb.rating": -1}}, // Sort by IMDB rating.
      { $limit: 3 },                 // Limit to 3 results.
      { $project: { title: 1, genres: 1, released: 1, "imdb.rating": 1}}
  ];
  db.movies.aggregate(pipeline).forEach(printjson);
}
findTopRomanceMovies();

// Run again from shell (or mongodb)
mongo "mongodb+srv://myAtlasCluster-fawxo.gcp.mongodb.net/sample_mflix"
--username $USERNAME --password $PASSWORD .\Ch7_Excercise1.js

// And you should see:
{
  "_id" : ObjectId("573a1399f29313caabceeead"),
  "genres" : [
          "Drama",
          "Romance"
  ],
  "title" : "Pride and Prejudice",
  "released" : ISODate("1996-01-14T00:00:00Z"),
  "imdb" : {
          "rating" : 9.1
  }
}
{
  "_id" : ObjectId("573a1399f29313caabcee345"),
  "genres" : [
          "Comedy",
          "Family",
          "Romance"
  ],
  "title" : "Andaz Apna Apna",
  "released" : ISODate("1994-11-04T00:00:00Z"),
  "imdb" : {
          "rating" : 8.8
  }
}
// Three more documents under this.
// … 




