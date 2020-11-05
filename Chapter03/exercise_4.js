/*
* Liviu Nedov.
* 05/10/2019
*
* Introduction to MongoDB
*
* Chapter 3 - Servers and Clients
* TOPIC 3.4: Server Commands
* Excercise exercise_4.js
*
* Script to create a database view object
* Start the script with Mongo Shell and a valid ATLAS account
*
* mongo mongodb+srv://admindb:<passwd>@atlas1-u7xxx.mongodb.net/sample_mflix @exercise_4.js
*/


// list collections and views 
db.getCollectionNames()

// create view
db.createView(
    "short_movie_info",
    "movies",
    [ { $project: { "year": 1, "title":1, "plot":1}}]
 )


// list collections and views 
db.getCollectionNames()

// query the view
db.short_movie_info.findOne()

exit 
