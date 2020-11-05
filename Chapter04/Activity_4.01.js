/*
* Amit Phaltankar
* 06/12/2019
*
* Packt MongoDB For Begginers.
* Chapter 4
*/

// Activity code for Packt MongoDB For Begginers.
// This code can be run directly against the MongoDB Shell in interactive mode, or

// Activity 4.01: Finding Movies by Genre and Paginate Results


var genre = "Action"
var pageNumber = 3
var pageSize = 5


var findMoviesByGenre = function(genre, pageNumber, pageSize){
    var toSkip = 0;
    if(pageNumber < 2){
        toSkip = 0;
    } else{
        toSkip = (pageNumber -1) * pageSize;
    }

    var movies = db.movies.find(
        {"genres" : genre},
        {"_id" : 0, "title" :1})
	.sort({"imdb.rating" : -1})
	.skip(toSkip)
	.limit(pageSize)
	.toArray()


    print("************* Page : " + pageNumber)
    for(var i =0; i < movies.length; i++){
        print(movies[i].title)
    }
}

/*
 * Execute Like:
 * findMoviesByGenre("Action", 3, 5)
 *
 * Sample Output:
 * ************* Page : 3
 * Harakiri
 * Star Wars: Episode IV - A New Hope
 * The Matrix
 * Battlestar Galactica
 * Sholay
 */
