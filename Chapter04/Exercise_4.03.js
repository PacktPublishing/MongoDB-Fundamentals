/*
* Amit Phaltankar
* 21/08/2020
*
* Packt MongoDB For Begginers.
* Chapter 4
*/

// Exercise code for Packt MongoDB For Begginers.
// Exercise 4.03 Combining Multiple Queries

/**
  * Your task for this exercise 
  * Find movies acted by Leonardo DiCaprio where director is Martin Scorsese and, genre is either Drama or Crimes. 
  * Provide title and release year
  * 
  */
db.movies.find(
    {
        "cast": "Leonardo DiCaprio",
        "directors" : "Martin Scorsese",
        "$or" : [{"genres" : "Drama"}, {"genres": "Crime"}]
    },
    {
        "title" : 1, "year" : 1, "_id" : 0
    }
)



/* 
 * Sample Output :
 *
 * { "title" : "Gangs of New York", "year" : 2002 }
 * { "title" : "The Aviator", "year" : 2004 }
 * { "year" : 2006, "title" : "The Departed" }
 * { "year" : 2013, "title" : "The Wolf of Wall Street" }
 *
 */
