/*
 * Amit Phaltankar
 * 29/01/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 6
 */

// Activity code for Packt MongoDB For Begginers.
// Activity 6.01 Add Missing Actor


/* 
 * Step 1
 * Add the missing actor to the movie and make sure no duplicate is inserted. Return the modified document including 'title' and 'cast'
 */
db.movies.findOneAndUpdate(
    {"title" : "Jurassic World"},
    {$addToSet : {"cast" : "Nick Robinson"}},
    {
        "returnNewDocument" : true,
        "projection" : {"_id" : 0, "title" : 1, "cast" : 1}
    }   
)


/* 
 * Step 2
 * Sort the cast array without adding any new record
 *
 */
db.movies.findOneAndUpdate(
    {"title" : "Jurassic World"},
    {$push : {
        "cast" : {
            $each : [],
            $sort : 1
        }}
    },
    {
        "returnNewDocument" : true,
        "projection" : {"_id" : 0, "title" : 1, "cast" : 1}
    }
)
