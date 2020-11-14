
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
// mongo "mongodb+srv://myAtlasCluster-fawxo.gcp.mongodb.net/sample_mflix" --username $USERNAME --password $PASSWORD .\Excercise_3_Code.js

// Exercise 4: Selecting the Title from Each Movie Category
// Modify the match to filter out long films
{ $match: {
  released: {$lte: new ISODate("2001-01-01T00:00:00Z") },
  runtime:  {$lte: 218},
  "imdb.rating": {$gte: 7.0}
  }
 },

// Add a new sort stage
{ $sort: {"imdb.rating": -1}},

// Add the new first accumulator to the group stage.
{ $group: {
  _id: {"$arrayElemAt": ["$genres", 0]},
  "recommended_title": {$first: "$title"},
  "recommended_rating": {$first: "$imdb.rating"},
  "recommended_raw_runtime": {$first: "$runtime"},
  "popularity": {  $avg: "$imdb.rating"},
  "top_movie": { $max: "$imdb.rating"},
  "longest_runtime": { $max: "$runtime"}
}},

// Add these new fields to projection
{ $project: {
  _id: 1,
   popularity: 1, 
   top_movie: 1, 
   recommended_title: 1,
   recommended_rating: 1,
   recommended_raw_runtime: 1,
   adjusted_runtime: { $add: [ "$longest_runtime", 12 ] } } }

// You new final query will look like
var findGenrePopularity = function() {
  print("Finding popularity of each genre");
  var pipeline = [
     { $match: {
      released: {$lte: new ISODate("2001-01-01T00:00:00Z") },
      runtime:  {$lte: 218},
      "imdb.rating": {$gte: 7.0}
      }
     },
     { $sort: {"imdb.rating": -1}},
     { $group: {
       _id: {"$arrayElemAt": ["$genres", 0]},
       "recommended_title": {$first: "$title"},
       "recommended_rating": {$first: "$imdb.rating"},
       "recommended_raw_runtime": {$first: "$runtime"},
       "popularity": {  $avg: "$imdb.rating"},
       "top_movie": { $max: "$imdb.rating"},
       "longest_runtime": { $max: "$runtime"}
     }},
     { $sort: { popularity: -1}},
     { $project: {
          _id: 1,
           popularity: 1, 
           top_movie: 1, 
           recommended_title: 1,
           recommended_rating: 1,
           recommended_raw_runtime: 1,
           adjusted_runtime: { $add: [ "$longest_runtime", 12 ] } } }
  ];
  db.movies.aggregate(pipeline).forEach(printjson);
}
findGenrePopularity();

// And the start of your output should look like
{
  "_id" : "Film-Noir",
  "recommended_title" : "The Third Man",
  "recommended_rating" : 8.3,
  "recommended_raw_runtime" : 93,
  "popularity" : 7.85,
  "top_movie" : 8.3,
  "adjusted_runtime" : 123
}
{
  "_id" : "Documentary",
  "recommended_title" : "Cosmos",
  "recommended_rating" : 9.3,
  "recommended_raw_runtime" : 60,
  "popularity" : 7.69695945945946,
  "top_movie" : 9.3,
  "adjusted_runtime" : 212
}

