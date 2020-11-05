/*
* Michael Harrison.
* 08/12/2019
*
* Packt The MongoDB Workshop
* Chapter 8
*/

// SOLUTION STEPS
// 1.	Import the readline and MongoDB libraries.
const readline = require('readline');
const MongoClient = require('mongodb').MongoClient;

// 2.	Create your readline interface.
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 3. Declare any variables you will need.
const url = process.env.ATLAS_URI; // Passed in as an environment variable.
const client = new MongoClient(url);
const databaseName = "sample_mflix";
const collectionName = "movies";

// 4 Create a function called list that will fetch the top 5 films for a given genre.
const list = function(database, client) {
    interface.question("Please enter a category: ", (category) => {
        database.collection(collectionName).find({genres: { $all: [category]}}).limit(5).project({title: 1, favourite: 1}).toArray(function(err, docs) {
            if(err) {
                console.log('Error in query.');
                console.log(err);
            }
            else if(docs) {
                console.log('Docs Array');
                console.log(docs);
            } else {
            }
            prompt(database, client);
            return;
         });

      });
}

// 5. Create a function called favourite that will update a document by title and add a key called favourite with value of true to the document.
const favourite = function(database, client) {
    interface.question("Please enter a movie title: ", (newTitle) => {
        database.collection(collectionName).updateOne({title: newTitle}, {$set: {favourite: true}}, function(err, result) {
            if(err) {
                console.log('Error updating');
                console.log(err);
                return false;
            }
            console.log('Updated documents #:');
            console.log(result.modifiedCount);
            prompt(database, client);
        })
    })

}

// 6.	Create an interactive while loop based on the users input, if you’re unsure how, refer to our prompt function from Exercise 5. 
const prompt = function(database, client) {
    interface.question("list, favourite OR exit: ", (input) => {
        if(input === "exit") {
            client.close();
            return interface.close(); // Will kill the loop.
        }   
        else if(input === "list") {
            list(database, client);
        }
        else if(input === "favourite") {
            favourite(database, client);
        }
        else { // If input matches none of our options.
            prompt(database, client)
        }
      });
}

// 7. Create the MongoDB connection and database.
client.connect(function(err) {
    if(err) {
        console.log('Failed to connect.');
        console.log(err);
        return false;
    }

    // Within the connection block, add a console.log to confirm the connection
    console.log('Connected to MongoDB with NodeJS!');

    const database = client.db(databaseName);
    if(!database) {
        console.log('Database object doesnt exist!');
        return false;
    } else {
        prompt(database, client);
    }
})

// RUN USING node Activity8.01.js
// DESIRED OUTPUT
/* Activity8.01> node .\Activity8.01.js
(node:6748) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.      Connected to MongoDB with NodeJS!list, favourite OR exit: listPlease enter a category: HorrorDocs Array
[
  { _id: 573a1391f29313caabcd75b5, title: 'Nosferatu' },
  { _id: 573a1391f29313caabcd806b, title: 'The Phantom of the Opera' },
  { _id: 573a1391f29313caabcd8978, title: 'The Unknown' },
  {
    _id: 573a1391f29313caabcd8acf,
    title: 'The Fall of the House of Usher'
  },
  { _id: 573a1391f29313caabcd956e, title: 'Nosferatu' }
]
list, favourite OR exit: favourite
Please enter a movie title: Nosferatu
Updated documents #:
1list, favourite OR exit: listPlease enter a category: HorrorDocs Array[  {
    _id: 573a1391f29313caabcd75b5,
    title: 'Nosferatu',
    favourite: true
  },
  { _id: 573a1391f29313caabcd806b, title: 'The Phantom of the Opera' },
  { _id: 573a1391f29313caabcd8978, title: 'The Unknown' },
  {
    _id: 573a1391f29313caabcd8acf,
    title: 'The Fall of the House of Usher'
  },
  { _id: 573a1391f29313caabcd956e, title: 'Nosferatu' }
]
list, favourite OR exit: exit
Activity8.01>  */

