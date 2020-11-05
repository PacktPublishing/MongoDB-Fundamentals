#
# Liviu Nedov.
# 05/10/2019
#
# Introduction to MongoDB
#
# Chapter 3 - Servers and Clients
# TOPIC 3.3: Database Client
# Excercise exercise_3.py
#
#
# Python 3 script to test MongoDB connection
# MongoDB ATLAS connection string needs to be edited with your connection
# Python 3 has to be installed and libs configured, as per exercise chapter 3
#

from pymongo import MongoClient
uri="mongodb+srv://admindb:xxxxxx@atlas1-u7xxx.mongodb.net/test?retryWrites=true&w=majority"
client = MongoClient(uri)

# switch to mflix database
mflix = client['sample_mflix']

# list collection names
print('Mflix Collections: ')
for name in mflix.list_collection_names():
	print(name)

exit()

