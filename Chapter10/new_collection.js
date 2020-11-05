
use sample_mflix
 
db.createCollection("new_collection")
 
for (i=0; i<=100; i++) {
   db.new_collection.insert({_id:i, "value":Math.random()})    
}
