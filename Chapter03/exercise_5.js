/*
* Liviu Nedov.
* 05/10/2019
*
* Introduction to MongoDB
*
* Chapter 3 - Servers and Clients
* Activity 3.5: Create cloud access for a new developer
* Excercise: exercise_5.js
*
* Script to create a database view object
* Start the script with Mongo Shell with Mark account
* 
* mongo mongodb+srv://Mark:<passwd>@atlas1-u7xxx.mongodb.net/dev_mflix @exercise_5.js
*/


// get current connection details - it should show Mark user
db.runCommand({connectionStatus : 1})

// get Mark user roles
db.getUser("Mark")

exit 

