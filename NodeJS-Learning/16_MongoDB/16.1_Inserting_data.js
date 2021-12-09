const {MongoClient , ObjectID} = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1:27017';        // 27017 is basically a localhost port

// Creating or connecting and inserting data into the mongo db database
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client) => {
   if(error){
      return console.log('Error : connection failed!');
   }

   // inserting only one data
   const db = client.db(databaseName);
   db.collection('users').insertOne({
      name : 'its_shyam640',
      age : 18
   },(error, result) => {
      if(error){
         return console.log('Error : Unable to insert data into the database!');
      }
      console.log(result.ops);
   });

   // inserting many data
   db.collection('users').insertMany([
      {
         name : 'pihu',
         age : 18
      },
      {
         name : 'krishna',
         age : 19
      },
      {
         name : 'Sakshi',
         age : 18
      }],(error,result) => {
         if(error){
            return console.log('Error : Unable to insert data into the database!');
         }
         console.log(result.ops);
   });
});