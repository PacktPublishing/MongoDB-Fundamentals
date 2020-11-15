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
// mongo "mongodb+srv://myAtlasCluster-fawxo.gcp.mongodb.net/sample_mflix" --username $USERNAME --password $PASSWORD .\Excercise_4_Code.js

// Exercise 5: Listing the Most User-Commented Movies
// Create code skeleton
var findMostCommentedMovies = function() {
    print("Finding the most commented on movies.");
    var pipeline = [
             { $sample: {}}, 
             { $group: {}},
             { $sort: {}},
             { $limit: 5},
             { $lookup: {}},
             { $unwind: },
             { $project: {}}
             { $out: {}}
    ];
    db.comments.aggregate(pipeline).forEach(printjson);
}
findMostCommentedMovies();

// Run a count in the mongodb shell to see the size of our collection
db.comments.count()  
50304

// Set the sample size
{ $sample: {size: 5000}}, 

// Fill in the group by
{ $group: {
    _id: "$movie_id",
    "sumComments": { $sum: 1}
}},

// Fill in the sort stage
{ $sort: { "sumComments": -1}},

// Run the pipeline, you should see something like:
Finding the most commented on movies.
{ "_id" : ObjectId("573a139af29313caabcf0e6c"), "sumComments" : 43 }
{ "_id" : ObjectId("573a1399f29313caabcee578"), "sumComments" : 43 }
{ "_id" : ObjectId("573a139af29313caabcf0178"), "sumComments" : 42 }
{ "_id" : ObjectId("573a139ef29313caabcfbd80"), "sumComments" : 41 }
{ "_id" : ObjectId("573a1397f29313caabce8413"), "sumComments" : 40 }

// Perform a lookup on comments
{ $lookup: {
    from: "movies",
    localField: "_id",
    foreignField: "_id",
    as: "movie"
}},

// Unwind and project our new comments
{ $unwind: "$movie" },
{ $project: {
    "movie.title": 1,
    "movie.imdb.rating": 1,
    "sumComments": 1,
}}

// Merge this result into a new collection
{ $out: "most_commented_movies" }

// Final result should be
var findMostCommentedMovies = function() {
    print("Finding the most commented on movies.");
    var pipeline = [
             { $sample: {size: 5000}}, 
             { $group: {
                 _id: "$movie_id",
                 "sumComments": { $sum: 1}
             }},
             { $sort: { "sumComments": -1}},
             { $limit: 5},
             { $lookup: {
                 from: "movies",
                 localField: "_id",
                 foreignField: "_id",
                 as: "movie"
             }},
             { $unwind: "$movie" },
             { $project: {
                 "movie.title": 1,
                 "movie.imdb.rating": 1,
                 "sumComments": 1,
             }},
             { $out: "most_commented_movies" }
    ];
    db.comments.aggregate(pipeline).forEach(printjson);
}
findMostCommentedMovies();

// Run the pipeline. There is no output.

// Query our new collection
> db.most_commented_movies.find()
{ "_id" : ObjectId("573a139af29313caabcf0f51"), "sumComments" : 45, "movie" : { "imdb" : { "rating" : 7.4 }, "title" : "X-Men" } }
{ "_id" : ObjectId("573a1396f29313caabce5ba0"), "sumComments" : 42, "movie" : { "imdb" : { "rating" : 8.1 }, "title" : "Jaws" } }
{ "_id" : ObjectId("573a139af29313caabcf0e6c"), "sumComments" : 42, "movie" : { "imdb" : { "rating" : 7 }, "title" : "The Mummy" } }
{ "_id" : ObjectId("573a139af29313caabcf0f68"), "sumComments" : 42, "movie" : { "imdb" : { "rating" : 6.1 }, "title" : "Men in Black II" } }     
{ "_id" : ObjectId("573a1398f29313caabceb500"), "sumComments" : 42, "movie" : { "imdb" : { "rating" : 7.8 }, "title" : "Back to the Future Part II" } }


