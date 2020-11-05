/**
 * @author Juned Ahsan
 * @bookTitle Introduction to MongoDB
 * @chapter 1
 * @activity 1.5 Create a collection
 * 
 */

 // switch to your database before you create a collection
use yourDatabaseName;


 // create a capped collection that allows maximum of 5 documents.
 // The size of each document in the collection should be no more than 256 bytes
 db.createCollection( 'myCollection', { 
    capped: true,
    size: 256,
    max: 5
})


// create a collection using createCollection command with no options
db.createCollection('myFirstCollection')

// create a collection by inserting first document in the collection
db.myCollectionName.insert(
{ "name" : "Yahya A",  "company" :  "Sony"}
);

// command to display the list of your collections in the database 
show collections;


 