/**
 * @author Juned Ahsan
 * @bookTitle Introduction to MongoDB
 * @chapter 1
 * @activity End of chapter activity to setup a movie database
 * 
 */

 // switch to your database before you do anything
 // Lets call this database as moviesDB
 use moviesDB


// Let’s create movies collection with few relevant attributes.
// We will create the collection by inserting the documents in a non-existent collection.
// You are encouraged to think and implement collections with attributes that you may find more suitable.

db.movies.insertMany(
    [
        {
            "title": "Rocky",
            "releaseDate": new Date("Dec 3, 1976"),
            "genre": "Action",
            "about": "A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
            "countries": ["USA"],
            "cast" : ["Sylvester Stallone","Talia Shire","Burt Young"],
            "writers" : ["Sylvester Stallone"],
            "directors" : ["John G. Avildsen"]
        },
        {
            "title": "Rambo 4",
            "releaseDate ": new Date("Jan 25, 2008"),
            "genre": "Action",
            "about": "In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.",
            "countries": ["USA"],
            "cast" : [" Sylvester Stallone", "Julie Benz", "Matthew Marsden"],
            "writers" : ["Art Monterastelli","Sylvester Stallone"],
            "directors" : ["Sylvester Stallone"]
        }
    ]
)
    
 // Let's confirm whether our inserts are added to the movies collection 
 db.movies.find().pretty() 
 
 
// Let’s create an awards collection with few records.
//  It is encouraged to think and come up with your own collection name and attributes.
// Here are few inserts in a basic awards collection 

db.awards.insertOne(
    {
        "title": "Oscars",
        "year": "1976",
        "category": "Best Film",
        "nominees": ["Rocky","All The President’s Men","Bound For Glory","Network","Taxi Driver"],
        "winners" : 
        [
            {
                "movie" : "Rocky"
            }
        ]
    }
)
    
db.awards.insertOne(
    {
        "title": "Oscars",
        "year": "1976",
        "category": "Actor In A Leading Role",
        "nominees": ["PETER FINCH","ROBERT DE NIRO","GIANCARLO GIANNINI"," WILLIAM HOLDEN","SYLVESTER STALLONE"],
        "winners" : 
        [
            {
                "actor" : "PETER FINCH",
                "movie" : "Network"
            }
        ]
    }
)

 // Fetch the documents from the awards collection 
 db.awards.find().pretty() 
