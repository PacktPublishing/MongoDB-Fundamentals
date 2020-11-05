/*
 * Amit Phaltankar
 * 22/08/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 5
 */

// Exercise code for Packt MongoDB For Begginers.
// Exercise 5.02 Delete a low rated movie

/**
  * Your task for this exercise 
  * 1. Prepare and execute a delete command
  * 2. The query condition should find movies by IMDb rating of less than 2
  * 3. The IMDb vote count should be more than 50000
  * 4. Find all such movies and delete the one with least number of awards
  * 5. Return the deleted document in respose and include title field. 
  * 
  */
db.movies.findOneAndDelete(
    {"imdb.rating" : {$lt : 2},"imdb.votes" : {$gt : 50000}},
    {
        "sort" : {"awards.won":1},
        "projection" : {"title" : 1}
    }
)
