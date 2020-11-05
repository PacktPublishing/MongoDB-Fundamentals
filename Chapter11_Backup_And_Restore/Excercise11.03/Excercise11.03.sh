#
# Michael Harrison.
# 14/12/2019
#
# Packt The MongoDB Workshop
# Chapter 11
#

# Excercise code for Packt MongoDB For Begginers.

# TOPIC C: "MongoDump"
# Excercise 3: Backing Up MongoDB Data.

# STEPS
mongodump --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix
mongodump --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --out=movies_backup
mongodump --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --out=movies_backup --gzip


# FINAL COMMAND
mongodump --uri=mongodb+srv://USERNAME:PASSWORD@myAtlas-fawxo.gcp.mongodb.net/sample_mflix --out=movies_backup --gzip