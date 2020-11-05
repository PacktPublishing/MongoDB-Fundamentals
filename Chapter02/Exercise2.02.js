/*
 * Amit Phaltankar.
 * 19/11/2019
 *
 * Packt MongoDB For Begginers.
 * Chapter 2 - Documents and Datatypes
 */

/*
 * Excercise code for Packt MongoDB For Begginers.
 * This code can be run directly against the MongoDB Shell in interactive mode, or
 * Can be run as a file like below:
 * mongo "mongodb+srv://myAtlasCluster-fawxo.gcp.mongodb.net/sample_mflix" --username $USERNAME --password $PASSWORD .\Exercise2.02.js
 */


/*
 *
 * Below is the Movie record with `imdb` and `tomatoes` ratings added.
 *
 */

{
    "id" : 14253,
    "Title" : "Beauty and the Beast",
    "year" : 2016,
    "language" : "English",
    "genre" : "Romance",
    "director" : "Christophe Gans",
    "runtime" : 112,
    "imdb" : {
        "rating": 6.4,
        "votes": "17762"
    },
    "tomatoes" : {
        "viewer" : {
            "rating" : 3.9,
            "votes" : 238
        },
        "critic" : {
            "rating" : 4.2,
            "votes" : 8
       },
       "fresh" : 96,
       "rotten" : 7
    }
}
