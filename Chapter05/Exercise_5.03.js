/*
 * Amit Phaltankar
 * 16/08/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 5
 */

// Exercise code for Packt MongoDB For Begginers.
// Exercise 5.03 Update IMDb and Tomatometer Rating

/**
  * Your task for this exercise 
  * 1. Prepare and execute a findOneAndUpdate command
  * 2. Query for a movie with title of "The Godfather"
  * 3. Prepare an update expression to update IMDb and Tomatometer viewers rating
  * 4. Return the modified document containing the modified fields
  * 
  */
db.movies.findOneAndUpdate(
    {"title" : "The Godfather"},
    {
        $set: {
            "imdb.votes" : 1565120,
            "tomatoes.viewer.rating": 4.76,
            "tomatoes.viewer.numReviews": 733777
        }
    },
    {
        "projection" : {"imdb" : 1, "tomatoes.viewer" : 1, "_id" : 0},
        "returnNewDocument" : true
    }
)
