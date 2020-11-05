#
# Michael Harrison.
# 14/12/2019
#
# Packt The MongoDB Workshop
# Chapter 11
#

# Excercise code for Packt MongoDB For Begginers.

## TOPIC A: "MongoExport"
# Excercise 1: Exporting MongoDB Data

# First cut of the command.
mongoexport --uri=mongodb+srv:USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --collection=movies

# With output
mongoexport --uri=mongodb+srv:USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --collection=movies --out=action_movies.json

# With Sort
mongoexport --uri=mongodb+srv:USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --collection=movies --out=action_movies.json --sort='{released: 1}'

# With Limit
mongoexport --uri=mongodb+srv:USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --collection=movies --out=action_movies.json --sort='{released: 1}' --limit=3

# With Query (WINDOWS)
mongoexport --uri=mongodb+srv:USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --collection=movies --out=action_movies.json --sort='{released : 1}' --limit=3 --query="{genres: 'Action'}"

# With Query (MAC)
mongoexport --uri=mongodb+srv:USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --collection=movies --out=action_movies.json --sort='{released : 1}' --limit=3 --query='{genres: "Action"}'

# EXPECTED OUTPUT
{"_id":{"$oid":"573a1394f29313caabce0e40"},"num_mflix_comments":1,"genres":["Action","Adventure"],"runtime":105,"title":"Le Bossu","poster":"https:#m.media-amazon.com/images/M/MV5BMzJjNTIwMDAtNmI2NS00N2UxLThmNzYtNmFlYzBhMjJhMTFjXkEyXkFqcGdeQXVyMjc1NDA2OA@@._V1_SY1000_SX677_AL_.jpg","countries":["France","Italy"],"lastupdated":"2015-08-10 00:49:05.363000000","languages":["French"],"cast":["Jean Marais","Bourvil","Sabine Sesselmann","Jean Le Poulain"],"directors":["Andrè Hunebelle"],"writers":["Pierre Foucaud","Paul Fèval (novel)","Jean Halain","Andrè Hunebelle"],"awards":{"wins":1,"nominations":0,"text":"1 win."},"year":1959,"imdb":{"rating":7.0,"votes":690,"id":52644},"type":"movie","tomatoes":{"viewer":{"rating":4.0,"numReviews":1},"lastUpdated":{"$date":"2015-08-26T18:14:36.000Z"}}}
{"_id":{"$oid":"573a1395f29313caabce2a08"},"plot":"After the Civil War, desperadoes led by a renegade named Rollins, following the settlers moving westward, try to drive a wedge in the friendship between the whites and the Indians. Apache ...","genres":["Action","Adventure","Western"],"runtime":93,"rated":"APPROVED","title":"Winnetou: The Last Shot","num_mflix_comments":1,"poster":"https:#m.media-amazon.com/images/M/MV5BMjAxNjczNDcxNV5BMl5BanBnXkFtZTcwODE0NDkxMQ@@._V1_SY1000_SX677_AL_.jpg","countries":["West Germany","Italy","Yugoslavia"],"fullplot":"After the Civil War, desperadoes led by a renegade named Rollins, following the settlers moving westward, try to drive a wedge in the friendship between the whites and the Indians. Apache chief Winnetou and his frontier friend, Old Shatterhand, do what they can to keep the peace. Rollins' henchmen try to keep Winnetou away from the warring Jicarillos' chief, White Buffalo, but he fights his way through, only to be confronted by Rollins carrying the chief's son, stabbed in the back with Winnetou's knife. Winnetou is accused of the killing. It is up to Old Shatterhand to save his friend.","languages":["German"],"cast":["Lex Barker","Pierre Brice","Rik Battaglia","Ralf Wolter"],"directors":["Harald Reinl"],"writers":["Karl May (novel)","J. Joachim Bartsch (screenplay)","Harald G. Petersson (screenplay)"],"awards":{"wins":3,"nominations":0,"text":"3 wins."},"lastupdated":"2015-08-13 01:06:42.600000000","year":1965,"imdb":{"rating":6.7,"votes":1525,"id":59915},"type":"movie","tomatoes":{"viewer":{"rating":3.9,"numReviews":8},"lastUpdated":{"$date":"2015-08-11T18:42:14.000Z"}}}
{"_id":{"$oid":"573a1396f29313caabce4122"},"plot":"At the end of the 16th century Wallachian ruler Prince Michael the Brave overcame the adversity of the Ottoman and Austrian Empires to unite Wallachia, Moldavia and Transylvania into one country.","genres":["Action","Biography","Drama"],"runtime":203,"title":"Michael the Brave","countries":["Romania","France","Italy"],"fullplot":"An epic fresco depicting the reign (1593-1601) of Mihai Pètrascu (better known as \"Mihai Viteazul\" / \"Michael the Brave\"), the famous prince who united the three provinces: Transalpine Vallachia, Transylvania and Moldavia, into the country of Romania, at the end of the 16th century (1599-1601) against the opposition of the Ottoman and Austrian Empires, this movie features large scale battle scenes mixed with political intrigues, murderous treachery, and family drama.","languages":["Romanian"],"cast":["Amza Pellea","Ion Besoiu","Olga Tudorache","Irina Gardescu"],"directors":["Sergiu Nicolaescu"],"writers":["Titus Popovici"],"awards":{"wins":0,"nominations":1,"text":"1 nomination."},"lastupdated":"2015-09-10 17:55:03.667000000","year":1970,"imdb":{"rating":8.3,"votes":5354,"id":66078},"type":"movie","tomatoes":{"viewer":{"rating":3.4,"numReviews":1511,"meter":64},"dvd":{"$date":"2004-04-27T00:00:00.000Z"},"critic":{"rating":6.6,"numReviews":9,"meter":89},"lastUpdated":{"$date":"2015-09-12T19:17:38.000Z"},"rotten":1,"production":"Paramount Home Video","fresh":8}}
