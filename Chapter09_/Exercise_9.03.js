/*
 * Amit Phaltankar
 * 21/10/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 9 
 */

// Exercise code for Packt MongoDB For Begginers.
// Exercise 9.03 Create Unique Index using Mongo Shell

/**
  * Your task for this exercise is to create a unique index on the `theaterId` field in `theaters` collection
  */

db.theaters.createIndex(
    {theaterId : 1},
    {unique : true}
)


