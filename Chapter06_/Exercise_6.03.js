/*
 * Amit Phaltankar
 * 16/08/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 6
 */

// Activity code for Packt MongoDB For Begginers.
// Activity 6.03 Update Directors name

/**
  * Your task for this activity 
  * 1. Prepare and execute an update command
  * 2. Filter all the movies where H. C. Potter is a director
  * 3. Create an identifier for elements of directors array where value of the element is H. C. Potter
  * 3. Use the idenfier to write an update expression and change the element value to Henry Codman Potter
  * 
  */
db.movies.updateMany(
    {"directors" : "H.C. Potter"},
    {$set : {
        "directors.$[hcPotter]" : "Henry Codman Potter"
    }},
    {
        "arrayFilters" : [{hcPotter : "H.C. Potter"}]
    }
)
