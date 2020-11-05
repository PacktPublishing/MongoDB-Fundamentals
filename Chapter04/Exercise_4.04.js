/*
* Amit Phaltankar
* 21/08/2020
*
* Packt MongoDB For Begginers.
* Chapter 4
*/

// Exercise code for Packt MongoDB For Begginers.
// Exercise 4.04 Projecting Nested Object Fields

/**
  * Your task for this exercise 
  * Find all movies from the collection and print only the nested object field of 'awards'
  * 
  */
db.movies.find(
    {}, 
    {
        "awards" :1, 
        "_id":0
    }
)

/**
  *
  * Next task is to to find all movies from the collection 
  *     and only print specific fields from the nested objects of 'awards'
  * 
  */
db.movies.find(
    {}, 
    {
        "awards.wins" :1, 
        "awards.nominations" : 1,  
        "_id":0
    }
)
