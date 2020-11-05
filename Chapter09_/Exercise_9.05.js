
/*
 * Amit Phaltankar
 * 21/10/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 9
 */

// Exercise code for Packt MongoDB For Begginers.
// Exercise 9.05 Create Sparse Index using Mongo Shell 

/**
  * Your task for this exercise is to create a Sparse index on the `review` field in the `reviews` collection.
  *
  */
  
db.reviews.createIndex(
    {review: 1},
    {sparse : true}
)
