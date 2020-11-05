/*
 * Amit Phaltankar
 * 29/01/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 5	
 */

// Activity code for Packt MongoDB For Begginers.
// Activity 5.01 Move comments to correct movie


/* 
 * Comments which have incorrect movie id
 *
 */
{
    "_id" : ObjectId("5a9427658b0beebeb6975eaa"),
    "name" : "Amy Phillips",
    "email" : "amy_phillips@fakegmail.com",
    "movie_id" : ObjectId("573a13bcf29313caabd57db6"),
    "text" : "Porro aspernatur nobis velit iste. Rerum ipsum non quam nam architecto nisi. Quidem quia nemo ipsa quibusdam nesciunt.",
    "date" : ISODate("2005-07-09T13:03:10Z")
}
{
    "_id" : ObjectId("5a9427658b0beebeb6975eb3"),
    "name" : "Barristan Selmy",
    "email" : "ian_mcelhinney@gameofthron.es",
    "movie_id" : ObjectId("573a13bcf29313caabd57db6"),
    "text" : "Delectus doloribus inventore tempore cumque. Repellendus dolor sapiente voluptas explicabo et delectus rem qui. Odio atque quam tempore repellat delectus.",
    "date" : ISODate("1986-05-28T11:17:06Z")
}
{
    "_id" : ObjectId("5a9427658b0beebeb6975eb4"),
    "name" : "Barristan Selmy",
    "email" : "ian_mcelhinney@gameofthron.es",
    "movie_id" : ObjectId("573a13bcf29313caabd57db6"),
    "text" : "Voluptate iure illo nihil. Aliquid aspernatur quae id cumque fugit officia pariatur. Nam sequi soluta occaecati nam facilis sunt quasi.",
    "date" : ISODate("1999-11-03T00:36:40Z")
}


/* 
 * An update command to find all  three comments by id and update the field of movie_id
 *
 */
db.comments.updateMany(
    {
        "_id" : {$in : [
	    ObjectId("5a9427658b0beebeb6975eb3"),
	    ObjectId("5a9427658b0beebeb6975eb4"),
	    ObjectId("5a9427658b0beebeb6975eaa")
	]}
    },
    {
        $set : {"movie_id" : ObjectId("573a13abf29313caabd25582")}
    }
) 

/* 
 * Command to find Sherlock Holmes by id and reduce the comments count by 3
 *
 */
db.movies.findOneAndUpdate(
    {"_id" : ObjectId("573a13bcf29313caabd57db6")},
    {$inc : {"num_mflix_comments" : -3}},
    {
        "returnNewDocument" : true,
        "projection" : {"title" : 1, "num_mflix_comments" : 1}
    }
)

/* 
 * Command to find 50 First Dates by id and increase the comments count by 3
 *
 */
db.movies.findOneAndUpdate(
    {"_id" : ObjectId("573a13abf29313caabd25582")},
    {$inc : {"num_mflix_comments" : 3}},
    {
    	"returnNewDocument" : true,
        "projection" : {"title" : 1, "num_mflix_comments" : 1}
    }
)
