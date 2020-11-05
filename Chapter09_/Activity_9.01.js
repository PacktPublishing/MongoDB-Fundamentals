/*
 * Amit Phaltankar
 * 21/10/2020
 *
 * Packt MongoDB For Begginers.
 * Chapter 9
 */

// Activity code for Packt MongoDB For Begginers.
// Activity 9.01 Optimize Given Query

// Find Performance issues for the given Query
db.sales.find(
    {
        "items.name" : "backpack",
        "storeLocation" : "Denver"
    },
    {
        "_id" : 0,
        "customer.email": 1,
        "customer.age": 1
    }
).sort({
    "customer.age" : -1
})


/* Solution */

/*
 * Step #1 Note the number of records the query returns
 */
db.sales.count(
    {
        "items.name" : "backpack",
        "storeLocation" : "Denver"
    }
)

/*
 * Step #2 Use explain() to analyze the execution stats
 */
db.sales.find(
    {
        "items.name" : "backpack",
        "storeLocation" : "Denver"
    },
    {
        "_id" : 0,
        "customer.email": 1,
        "customer.age": 1
    }
).sort({
    "customer.age" : -1
}).explain("executionStats")

/* 
 * Step #3 Create Required Indexes
 */
db.sales.createIndex(
    {
        "items.name" : 1,
        "storeLocation" : 1,
        "customer.age" : -1
    }
)

/* 
 * Step #4 Analyze the query execution stats once again and prove that the performance issues are fixed
 *
db.sales.find(
    {
        "items.name" : "backpack",
        "storeLocation" : "Denver"
    },
    {
        "_id" : 0,
        "customer.email": 1,
        "customer.age": 1
    }
).sort({
    "customer.age" : -1
}).explain("executionStats")

