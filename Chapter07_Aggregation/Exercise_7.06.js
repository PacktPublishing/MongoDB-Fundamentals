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
// mongo "mongodb+srv://myAtlasCluster-fawxo.gcp.mongodb.net/sample_mflix" --username $USERNAME --password $PASSWORD .\Excercise_5_Code.js

// Exercise 6: Finding award winning documentary movies.
// Review the following pipeline:
var findAwardWinningDocumentaries = function() {
    print("Finding award winning documentary Movies...");
    var pipeline = [
        { $sort:  {"awards.wins": -1}}, // Sort by award wins.
        { $match: {"awards.wins": { $gte: 1}}},
        { $limit: 20}, // Get the top 20 movies with more than one award 
        { $match: {
            genres: {$in: ["Documentary"]}, // Documentary movies only.
        }},
        { $project: { title: 1, genres: 1, awards: 1}},
        { $limit: 3}, 
    ];
    var options = { }
    db.movies.aggregate(pipeline, options).forEach(printjson);
}
findAwardWinningDocumentaries();

// Merge match stages and move the match:
var pipeline = [
    { $match: {
        "awards.wins": { $gte: 1},
        genres: {$in: ["Documentary"]},
    }},
    { $sort:  {"awards.wins": -1}}, // Sort by award wins.
    { $limit: 20}, // Get the top 20 movies. 
    { $project: { title: 1, genres: 1, awards: 1}},
    { $limit: 3},
];

// Move the sort to near the end
var pipeline = [
    { $match: {
        "awards.wins": { $gte: 1},
        genres: {$in: ["Documentary"]},
    }},
    { $limit: 20}, // Get the top 20 movies. 
    { $project: { title: 1, genres: 1, awards: 1}},
    { $sort:  {"awards.wins": -1}}, // Sort by award wins.
    { $limit: 3},
];


// Delete the redundant first limit
var pipeline = [
    { $match: {
        "awards.wins": { $gte: 1},
        genres: {$in: ["Documentary"]},
    }},
    { $project: { title: 1, genres: 1, awards: 1}},
    { $sort:  {"awards.wins": -1}}, // Sort by award wins.
    { $limit: 3},
];

// Move the projection
var pipeline = [
    { $match: {
        "awards.wins": { $gte: 1},
        genres: {$in: ["Documentary"]},
    }},
    { $sort:  {"awards.wins": -1}}, // Sort by award wins.
    { $limit: 3},
    { $project: { title: 1, genres: 1, awards: 1}},
];

// Add our aggregation options
var options ={
    maxTimeMS: 30000,
    allowDiskUse: true,
    comment: "Find Award Winning Documentary Films"
}

// Full (revised) query
var findAwardWinningDocumentaries = function() {
    print("Finding award winning documentary Movies...");
    var pipeline = [
        { $match: {
            "awards.wins": { $gte: 1},
            genres: {$in: ["Documentary"]},
        }},
        { $sort:  {"awards.wins": -1}}, // Sort by award wins.
        { $limit: 3},
        { $project: { title: 1, genres: 1, awards: 1}},
    ];
    
    var options ={
        maxTimeMS: 30000,
        allowDiskUse: true,
        comment: "Find Award Winning Documentary Films"
    }
    db.movies.aggregate(pipeline, options).forEach(printjson);
}
findAwardWinningDocumentaries();

// Result should look like
Finding award-winning documentary Movies...
{
        "_id" : ObjectId("573a13dcf29313caabdb1463"),
        "genres" : [
                "Documentary",
                "History"
        ],
        "title" : "The Act of Killing",
        "awards" : {
                "wins" : 57,
                "nominations" : 30,
                "text" : "Nominated for 1 Oscar. Another 56 wins & 30 nominations."
        }
}
{
        "_id" : ObjectId("573a13f4f29313caabde1684"),
        "genres" : [
                "Documentary"
        ],
        "title" : "Citizenfour",
        "awards" : {
                "wins" : 44,
                "nominations" : 25,
                "text" : "Won 1 Oscar. Another 43 wins & 25 nominations."
        }
}
{
        "_id" : ObjectId("573a13d7f29313caabda2662"),
        "genres" : [
                "Documentary",
                "Biography",
				"Music"
        ],
        "title" : "Searching for Sugar Man",
        "awards" : {
                "wins" : 43,
                "nominations" : 26,
                "text" : "Won 1 Oscar. Another 42 wins & 26 nominations."
        }
}





