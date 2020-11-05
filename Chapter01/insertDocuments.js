/**
 * @author Juned Ahsan
 * @bookTitle Introduction to MongoDB
 * @chapter 1
 * @activity 1.5 Insert documents in collection
 * 
 */

 // switch to your database before you do anything
use yourDatabaseName;


//insertOne command can be called to insert one document at a time. Let’s look at it in action:

db.blogs.insertOne(
    { username: "Zakariya", noOfBlogs: 100, tags: ["science","fiction"]
})



//insertMany() command allows you to insert multiple documents in one go. You can pass an array of documents to the command as mentioned here:

db.blogs.insertMany([
	{ username: "Thaha", noOfBlogs: 200, tags: ["science","robotics"]},   
	{ username: "Thayebbah", noOfBlogs: 500, tags: ["cooking","general knowledge"]},
	{ username: "Thaherah", noOfBlogs: 50, tags: ["beauty","arts"]}
])








 