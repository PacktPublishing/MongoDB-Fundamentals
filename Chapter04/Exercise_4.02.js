/*
* Amit Phaltankar
* 21/08/2020
*
* Packt MongoDB For Begginers.
* Chapter 4
*/

// Exercise code for Packt MongoDB For Begginers.
// Exercise 4.02 Querying for Movies of an Actor

/**
 * Your task for this exercise is to write multiple queries.
 */

// 1.Number of movies Leonardo DiCaprio acted in 
db.movies.countDocuments({"cast" : "Leonardo DiCaprio"})

/*
 * Sample Outout
 * > 25
 */


// 2. Different genres of Leonardo DiCaprio movies
db.movies.distinct("genres", {"cast" : "Leonardo DiCaprio"})
/* Sample Output:
 * [
 * 	"Biography",
 * 	"Drama",
 * 	"Action",
 * 	"Thriller",
 * 	"Western",
 * 	"Romance",
 * 	"Adventure",
 * 	"Crime",
 * 	"History",
 * 	"Documentary",
 * 	"Comedy",
 * 	"Mystery",
 * 	"Sci-Fi",
 * 	"Short"
 * ]
 *
 */


// 3. Leonardo DiCaprio's movie titles and their release years
db.movies.find(
	{"cast" : "Leonardo DiCaprio"}, 
	{"title":1, "year":1, "_id":0}
)

/* Sample Output:
 * 
 * { "year" : 1993, "title" : "This Boy's Life" }
 * { "title" : "What's Eating Gilbert Grape", "year" : 1993 }
 * { "title" : "The Quick and the Dead", "year" : 1995 }
 * { "title" : "Total Eclipse", "year" : 1995 }
 * { "title" : "Marvin's Room", "year" : 1996 }
 * { "year" : 1996, "title" : "Romeo + Juliet" }
 * { "year" : 1997, "title" : "Titanic" }
 * { "year" : 1998, "title" : "The Man in the Iron Mask" }
 * { "year" : 2000, "title" : "The Beach" }
 * { "title" : "Gangs of New York", "year" : 2002 }
 * { "year" : 2002, "title" : "Catch Me If You Can" }
 * { "title" : "The Aviator", "year" : 2004 }
 * { "year" : 2006, "title" : "The Departed" }
 * { "title" : "Blood Diamond", "year" : 2006 }
 * { "year" : 2007, "title" : "The 11th Hour" }
 * { "year" : 2008, "title" : "Body of Lies" }
 * { "year" : 2008, "title" : "Revolutionary Road" }
 * { "year" : 2013, "title" : "The Wolf of Wall Street" }
 * { "year" : 2008, "title" : "Body of Lies" }
 * { "year" : 2010, "title" : "Shutter Island" }
 * Type "it" for more
 *
 */

// 4.Number of movies Leonardo DiCaprio directed
db.movies.countDocuments({"directors" : "Leonardo DiCaprio"})
/*
 * Sample Outout
 * > 0
 */
