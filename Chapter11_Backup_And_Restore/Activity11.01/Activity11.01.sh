#
# Michael Harrison.
# 22/12/2019
#
# Packt The MongoDB Workshop
# Chapter 11
#

# SOLUTION INPUTS
mongoexport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --db=sample_mflix --collection=theaters --out="theaters.csv" --type=csv --sort='{theaterId: 1}'
mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --drop --collection=theaters_import --file=theaters.csv 
mongodump --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --out=./backups --gz --nsExclude=theaters
mongorestore --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net --from="sample_mflix" --to="backup_mflix_backup" --drop ./backups

# SOLUTION STEPS
# 1.	Start with mongoexport, remove the --db option, since we are providing it in URI.
mongoexport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --db=sample_mflix --collection=theaters --out="theaters.csv" --type=csv --sort='{theaterId: 1}'

# 2.    Add the fields option to the mongoexport command
mongoexport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --fields=theaterId,location --collection=theaters --out="theaters.csv" --type=csv --sort='{theaterId: 1}'

# 3. Add CSV options to the import command, type, ignoreBlanks and headerline.
mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --type=CSV --headerline --ignoreBlanks --collection=theaters_import --file=theaters.csv 

# 4. Fix the gzip option for the dump command.
mongodump --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --out=./backups --gzip --nsExclude=theaters

# 5. Change nsExclude to be excludeCollection
mongodump --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --out=./backups --gzip --excludeCollection=theaters

# 6. In the mongorestore command, fix the names of the options:
mongorestore --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net --nsFrom="sample_mflix" --nsTo="backup_mflix_backup" --drop ./backups

# 7. Also in mongorestore, add the gzip option as our dump was a gzip.
mongorestore --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net --nsFrom="sample_mflix" --nsTo="backup_mflix_backup" --gzip --drop ./backups

# 8. Finally, make sure our namespace uses the wildcard for a proper name migration.
mongorestore --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net --nsFrom="sample_mflix.*" --nsTo="backup_mflix_backup.*" --gzip --drop ./backups

# FINAL COMMANDS
mongoexport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --fields=theaterId,location --collection=theaters --out="theaters.csv" --type=csv --sort='{theaterId: 1}'
mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --type=CSV --headerline --ignoreBlanks --collection=theaters_import --file=theaters.csv 
mongodump --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --out=./backups --gzip --excludeCollection=theaters
mongorestore --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net --nsFrom="sample_mflix.*" --nsTo="backup_mflix_backup.*" --gzip --drop ./backups

# Expected Output screenshots can be seen in Chapter 11.
