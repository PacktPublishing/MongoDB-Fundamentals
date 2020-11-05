/*
 * Amit Phaltankar
 * 22/08/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 5
 */

// Exercise code for Packt MongoDB For Begginers.
// Exercise 5.01 Deleting one of many Matched Documents

/**
  *
  * Your task for this exercise 
  * 1. Prepare a query with regular expression that matches four documents
  * 2. Use the query expression in a delete operation and confirm only one document is removed
  * 
  */

db.new_movies.deleteOne({"title" : {"$regex": "^movie"}})

// Sample Output denotes one document is deleted
// { "acknowledged" : true, "deletedCount" : 1 }


