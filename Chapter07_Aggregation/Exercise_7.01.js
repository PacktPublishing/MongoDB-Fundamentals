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

//// TOPIC A: "Aggregate is the new Find"
// Exercise 1: Introduction to Simple Aggregations.

// Run
use sample_mflix
db.movies.findOne();
// Will return
 {
    "_id" : ObjectId("573a1390f29313caabcd4135"),
    "plot" : "Three men hammer on an anvil and pass a bottle of beer around.",
    "genres" : ["Short"],
    "runtime" : 1,
    "cast" : ["Charles Kayser","John Ott"],
    "num_mflix_comments" : 1,
    "title" : "Blacksmith Scene",
    "fullplot" : "A stationary camera looks at a large anvil with a blacksmith behind it and one on either side. The smith in the middle draws a heated metal rod from the fire, places it on the anvil, and all three begin a rhythmic hammering. After several blows, the metal goes back in the fire. One smith pulls out a bottle of beer, and they each take a swig. Then, out comes the glowing metal and the hammering resumes.",       
    "countries" : ["USA"],
    "released" : ISODate("1893-05-09T00:00:00Z"),
    "directors" : ["William K.L. Dickson"],
    "rated" : "UNRATED",
    "awards" : {
            "wins" : 1,
            "nominations" : 0,
            "text" : "1 win."
    },
    "lastupdated" : "2015-08-26 00:03:50.133000000",
    "year" : 1893,
    "imdb" : {
            "rating" : 6.2,
            "votes" : 1189,
            "id" : 5
    },
    "type" : "movie",
    "tomatoes" : {
            "viewer" : {
                    "rating" : 3,
                    "numReviews" : 184,
                    "meter" : 32
            },
            "lastUpdated" : ISODate("2015-06-28T18:34:09Z")
    }
}

// Create Initial Query
var findTopRomanceMovies = function() {
    print("Finding top Classic Romance Movies...");
    var pipeline = [
        { $limit: 3 },                 // Limit to 3 results.
        { $sort:  {"imdb.rating": -1}}, // Sort by IMDB rating.
  { $match: {. . .}}
    ];
    db.movies.aggregate(pipeline).forEach(printjson);
}
findTopRomanceMovies();

// Fill in Match Query
var findTopRomanceMovies = function() {
    print("Finding top Classic Romance Movies...");
    var pipeline = [
        { $limit: 3 },                 // Limit to 3 results.
        { $sort:  {"imdb.rating": -1}}, // Sort by IMDB rating.
        { $match: {
            genres: {$in: ["Romance"]}, // Romance movies only.
            released: {$lte: new ISODate("2001-01-01T00:00:00Z") }}},

    ];
    db.movies.aggregate(pipeline).forEach(printjson);
}
findTopRomanceMovies();

// Update pipeline with new stage order
      var pipeline = [
        { $sort:  {"imdb.rating": -1}}, // Sort by IMDB rating.
        { $match: {
            genres: {$in: ["Romance"]}, // Romance movies only.
            released: {$lte: new ISODate("2001-01-01T00:00:00Z") }}},
        { $limit: 3 },                 // Limit to 3 results (last stage)
    ];

// Add projection to the pipeline:
var pipeline = [
    { $sort:  {"imdb.rating": -1}}, // Sort by IMDB rating.
    { $match: {
        genres: {$in: ["Romance"]}, // Romance movies only.
        released: {$lte: new ISODate("2001-01-01T00:00:00Z") }}},
    { $limit: 3 },                 // Limit to 3 results.
    { $project: { genres: 1, released: 1, "imdb.rating": 1}}
];

// Run the file from your shell (or from MongoDB)
mongo "mongodb+srv://myAtlasCluster-fawxo.gcp.mongodb.net/sample_mflix"
 --username $USERNAME --password $PASSWORD .\Ch7_Excercise1.js
// Should return output like:
 {
    "_id": ObjectId("573a1399f29313caabceeead"),
    "genres": [
        "Drama",
        "Romance"
    ],
    "released": ISODate("1996-01-14T00:00:00Z"),
    "imdb": {
        "rating": 9.1
    }
}
{
    "_id": ObjectId("573a1399f29313caabcee345"),
    "genres": [
        "Comedy",
        "Family",
        "Romance"
    ],
    "released": ISODate("1994-11-04T00:00:00Z"),
    "imdb": {
        "rating": 8.8
    }
}
// Three more documents below this.