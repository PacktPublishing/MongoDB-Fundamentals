## Exercise 10.3.4  - Example of Windows batch file on how to start a simple replication cluster
## MongoDB server need to be installed on your computer 
## and Mongo binaries should be in PATH

start mongod --replSet my_cluster --port 27001 --dbpath C:\data\inst1 --logpath C:\data\log\inst1.log --logappend --oplogSize 50
 
start mongod --replSet my_cluster --port 27002 --dbpath C:\data\inst2 --logpath C:\data\log\inst2.log --logappend --oplogSize 50
 
start mongod --replSet my_cluster --port 27003 --dbpath C:\data\inst3 --logpath C:\data\log\inst3.log --logappend --oplogSize 50

