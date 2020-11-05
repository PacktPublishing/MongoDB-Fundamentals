/*
 * Amit Phaltankar
 * 21/10/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 9
 */

// Exercise code for Packt MongoDB For Begginers.
// Exercise 9.06 Create Partial Index using Mongo Shell 

/**
  * Your task for this exercise is to create a Partial index on the `title` and `type` fields in the `movies` collection for the movies released after 1950.
  *
  */
  
db.movies.createIndex(
    {title: 1, type:1}, 
    {
        partialFilterExpression: { 
            year : { $gt: 1950}
        }
    }
)
