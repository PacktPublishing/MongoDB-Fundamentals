#
# Michael Harrison.
# 14/12/2019
#
# Packt The MongoDB Workshop
# Chapter 11
#

# Excercise code for Packt MongoDB For Begginers.

## TOPIC B: "MongoImport"
# Excercise 2: Importing MongoDB Data.

# STEPS
mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --collection=oldData --file=old.csv

mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --collection=oldData --file=old.csv --type=CSV

mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --collection=oldData --file=old.csv --type=CSV --headerline

mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --collection=oldData --file=old.csv --type=CSV --headerline --ignoreBlanks

mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --collection=oldData --file=old.csv --type=CSV --headerline --ignoreBlanks --drop

mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --collection=oldData --file=old.csv --drop

mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --drop --collection=newData --file=new.json 

mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --collection=newData --file=new.json --drop --jsonArray

# FINAL COMMANDS
mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --collection=newData --file=new.json --drop --jsonArray
mongoimport --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/imports --collection=oldData --file=old.csv --type=CSV --headerline --ignoreBlanks --drop