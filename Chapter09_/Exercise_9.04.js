
/*
 * Amit Phaltankar
 * 21/10/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 9
 */

// Exercise code for Packt MongoDB For Begginers.
// Exercise 9.04 Create TTL index using Mongo Shell

/**
  * Your task for this exercise is to create a TTL index on the `reviewDate` field in `reviews` collection.
  *
  */
db.reviews.createIndex(
    { reviewDate: 1}, 
    { expireAfterSeconds: 60 }
)

