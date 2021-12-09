const {MongoClient , ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';        // 27017 is basically a localhost port
const databaseName = 'task-managing';
const id = new ObjectID();

// Creating or connecting and inserting data into the mongo db database
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client) => {
   if(error){
      return console.log('Error : connection failed!');
   }

   const db = client.db(databaseName);

   // Deleting many users
   db.collection('users').deleteMany({
      age : 18
   }).then((result) => {
      console.log(result);
   }).catch((error) => {
      console.log(error);
   });
});






