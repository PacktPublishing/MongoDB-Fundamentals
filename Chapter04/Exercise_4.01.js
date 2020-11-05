/*
* Amit Phaltankar
* 21/08/2020
*
* Packt MongoDB For Begginers.
* Chapter 4
*/

// Exercise code for Packt MongoDB For Begginers.
// Exercise 4.01 Using find() and findOne() without a Condition

/**
  * Your task for this exercise is to use find() and findOne() without a condition.
  */


/*
 * Use find() function without a query condition
 */
// An empty find() function
db.comments.find()

// find() function with an empty document
db.comments.find({})

// find() function querying on a non existing field
db.comments.find({"a_non_existent_field" : null})


/*
 * Use findOne() function without a query condition
 */
// An empty findOne()
db.comments.findOne()

// findOne() function with an empty document
db.comments.findOne({})

// findOne() function querying on a non existing field
db.comments.findOne({"a_non_existent_field" : null})
