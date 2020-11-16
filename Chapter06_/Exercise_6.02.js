/*
 * Amit Phaltankar
 * 16/08/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 6
 */

// Exercise code for Packt MongoDB For Begginers.
// Exercise 6.02 New Category of Classic Movies 

/**
  * Your task for this exercise 
  * 1. Prepare and execute an update command
  * 2. Filter all the movies where viewer tomato meter is more than 95
  * 3. And, critics tomato meter is more than 95
  * 4. Update the genres array of alla matching movies to add a new genre of Classic
  * 
  */
db.movies.updateMany(
    {
        "tomatoes.viewer.meter" : {$gt : 95}, 
	"tomatoes.critic.meter" : {$gt : 95}
    },
    {
        $addToSet : {"genres" : "Classic"}
    }
)
