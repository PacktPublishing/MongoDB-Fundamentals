/*
 * Amit Phaltankar
 * 16/08/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 6
 */

// Exercise code for Packt MongoDB For Begginers.
// Exercise 6.01 Add more elements to an array 

/**
  * Your task for this exercise 
  * 1. Prepare and execute a findOneAndUpdate using $push operator on the `genre` field.
  * 2. Execute the command to add `Unknown` genre to the array, this will also create the `genre` array.
  * 3. Execute the command to add genre of `Drama` to the array created in the previous step.
  * 
  */

// Add `Unknown` genere 
db.movies.findOneAndUpdate(
    {_id : 111},
    {$push : {"genre" : "unknown"}},
    {"returnNewDocument" : true}
)

// Add `Drama` genere 
db.movies.findOneAndUpdate(
    {_id : 111},
    {$push : {"genre" : "Drama"}},
    {"returnNewDocument" : true}
)
