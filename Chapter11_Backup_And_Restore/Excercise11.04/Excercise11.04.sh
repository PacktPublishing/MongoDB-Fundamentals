#
# Michael Harrison.
# 14/12/2019
#
# Packt The MongoDB Workshop
# Chapter 11
#

# Excercise code for Packt MongoDB For Begginers.

# TOPIC D: "MongoRestore"
# Excercise 4: Backing Up MongoDB Data.

# PRE-REQUISITE COMMAND FOR CREATING DUMP (FROM EXCERCISE 3)
mongodump --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --out=./movies_backup --gzip

# STEPS
mongorestore --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net ./movies_backup
mongorestore --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net --gzip ./movies_backup
mongorestore --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net --gzip --drop ./movies_backup
mongorestore --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net --nsFrom="sample_mflix.*" --gzip --drop ./movies_backup
mongorestore --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net --nsFrom="sample_mflix.*" --nsTo="backup_mflix.*" --gzip --drop ./movies_backup
# FINAL COMMAND
mongorestore --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net --nsFrom="sample_mflix.*" --nsTo="backup_mflix.*" --gzip --drop ./movies_backup