/*
 * Amit Phaltankar
 * 21/10/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 9
 */

// Exercise code for Packt MongoDB For Begginers.
// Exercise 9.07 Create Case-Insensitive Index using Mongo Shell 

/**
  * Your task for this exercise is to create a Partial index on the `title` field in the `movies` collection.
  */
  
db.movies.createIndex(
    {title: 1}, 
    { 
        collation: { 
            locale: 'en', strength: 2 
        } 
    } 
)
