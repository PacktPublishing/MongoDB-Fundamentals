/*
* Michael Harrison.
* 04/10/2019
*
* Packt MongoDB For Begginers.
* Chapter 7
*/

// Activity code for Packt MongoDB For Begginers.
// Includes the desired output and solution code for chapter 7 activity.
// This code can be run directly against the MongoDB Shell in interactive mode, or
// Can be run as a file like below:
// mongo "mongodb+srv://myAtlasCluster-fawxo.gcp.mongodb.net/sample_mflix" --username $USERNAME --password $PASSWORD .\Activity_Code.js

//// SCENARIO
/*
You aim to design, test and run an aggregation pipeline that will create this unified view. You should ensure the final output of the aggregation answers the following business problems:
-	For each genre, which movie has the most award nominations, given they have won at least one of these nominations.
-	For each of these movies, what is their appended run time, given that each movie has 12 minutes of trailers before it?
-	What is an example of the sorts of things users are saying about this film?
-	Because this is a classic movie marathon, only movies older than 2001 are eligible.
-	Across all genres, which genres have the highest number of award wins?
To keep the desired output simple, limit the result to 3 documents for this scenario.
*/

//// DESIRED OUTPUT
{
    "_id" : "Drama",
    "film_id" : ObjectId("573a139ff29313caabcff499"),
    "film_title" : "Almost Famous",
    "film_awards" : {
            "wins" : 58,
            "nominations" : 95,
            "text" : "Won 1 Oscar. Another 57 wins & 95 nominations."
    },
    "genre_award_wins" : 14024,
    "film_runtime" : 134,
    "comments" : [ ]
}
{
    "_id" : "Comedy",
    "film_id" : ObjectId("573a139bf29313caabcf500b"),
    "film_title" : "Shakespeare in Love",
    "film_awards" : {
            "wins" : 70,
            "nominations" : 77,
            "text" : "Won 7 Oscars. Another 63 wins & 77 nominations."
    },
    "genre_award_wins" : 7852,
    "film_runtime" : 135,
    "comments" : [
            {
                    "_id" : ObjectId("5a9427648b0beebeb6965266"),
                    "name" : "Jason Hernandez",
                    "email" : "jason_hernandez@fakegmail.com",
                    "movie_id" : ObjectId("573a139bf29313caabcf500b"),
                    "text" : "Alias ut tenetur cumque. Et tempore inventore tempora repudiandae officia. Quos laudantium quo consequatur cumque sit nemo mollitia.",
                    "date" : ISODate("1992-09-21T03:06:06Z")
            }
    ]
}
{
    "_id" : "Biography",
    "film_id" : ObjectId("573a13a0f29313caabd0287a"),
    "film_title" : "Erin Brockovich",
    "film_awards" : {
            "wins" : 37,
            "nominations" : 50,
            "text" : "Won 1 Oscar. Another 36 wins & 50 nominations."
    },
    "genre_award_wins" : 2908,
    "film_runtime" : 143,
    "comments" : [
            {
                    "_id" : ObjectId("5a9427648b0beebeb6967468"),
                    "name" : "Lisa Rasmussen",
                    "email" : "lisa_rasmussen@fakegmail.com",
                    "movie_id" : ObjectId("573a13a0f29313caabd0287a"),
                    "text" : "Occaecati cum commodi doloribus aut. Maiores sunt reiciendis ipsam deserunt velit fugit. Quas magnam autem praesentium fugiat libero error.",
                    "date" : ISODate("1981-09-29T07:21:19Z")
            }
    ]
}

//// SOLUTION STEPS
// Scaffold code.
var chapter7Activity = function() {
    var pipeline = [];
    db.movies.aggregate(pipeline).forEach(printjson);
}
chapter7Activity()

// Add match
var pipeline = [
    {$match: {
        released: {$lte: new ISODate("2001-01-01T00:00:00Z")}
    }}
  ];

// Add second match condition
  {$match: {
    released: {$lte: new ISODate("2001-01-01T00:00:00Z")},
    "awards.wins": {$gte: 1},
}}

// Add a sort for our results
{$sort: {
    "awards.nominations": -1
}},

// Add a group by stage with all our new fields
{ $group: {
    _id: {"$arrayElemAt": ["$genres", 0]},
    "film_id": {$first: "$_id"},
    "film_title": {$first: "$title"},
    "film_awards": {$first: "$awards"},
    "film_runtime": {$first: "$runtime"},
    "genre_award_wins": {$sum: "$awards.wins"},
  }},

// Perform a join on comments.
{ $lookup: {
    from: "comments",
    localField: "film_id",
    foreignField: "movie_id",
    as: "comments"
}},

// Project the first comment from each array, plus all output fields.
{ $project: {
    film_id: 1,
    film_title: 1,
    film_awards: 1,
    film_runtime: { $add: [ "$film_runtime", 12]},
    genre_award_wins: 1,
      "comments": { $slice: ["$comments", 1]}
  }}, 

// Sort by wins and limit.
{ $sort: {
    "genre_award_wins": -1
}},
{ $limit: 3}

//// FINAL SOLUTION
var chapter7Activity = function() {
    var pipeline = [
        {$match: {
            released: {$lte: new ISODate("2001-01-01T00:00:00Z")},
            "awards.wins": {$gte: 1},
        }},
        {$sort: {
            "awards.nominations": -1
        }},
        { $group: {
            _id: {"$arrayElemAt": ["$genres", 0]},
            "film_id": {$first: "$_id"},
            "film_title": {$first: "$title"},
            "film_awards": {$first: "$awards"},
            "film_runtime": {$first: "$runtime"},
            "genre_award_wins": {$sum: "$awards.wins"},
          }},
          { $lookup: {
            from: "comments",
            localField: "film_id",
            foreignField: "movie_id",
            as: "comments"
        }},
        { $project: {
            film_id: 1,
            film_title: 1,
            film_awards: 1,
            film_runtime: { $add: [ "$film_runtime", 12]},
            genre_award_wins: 1,
              "comments": { $slice: ["$comments", 1]}
          }}, 
          { $sort: {
              "genre_award_wins": -1
          }},
          { $limit: 3}
    ];
    
    db.movies.aggregate(pipeline).forEach(printjson);
}
chapter7Activity();


