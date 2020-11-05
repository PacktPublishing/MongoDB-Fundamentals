const MongoClient = require('mongodb').MongoClient;
const url = process.env.ATLAS_URI;
const client = new MongoClient(url);

client.connect(function (err) {
  console.log('Connected to MongoDB with NodeJS!');
  const database = client.db('sample_mflix');
  var filter = { title: 'Blacksmith Scene' };
  database
    .collection('movies')
    .find(filter)
    .toArray(function (err, docs) {
      console.log('Docs results:');
      console.log(docs);
    });
  client.close();
});
