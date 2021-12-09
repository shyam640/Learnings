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

   // Updating single user
   db.collection('users').updateOne({
      _id : new ObjectID("60e55c94ec52d829e05997b6"),
   },{
      $set : {
         name : 'Piyuu',
         age : 19
      }
   },{
      $dec : {
         age : 1
      }
   }
   ).then((result) =>{
      console.log(result);
   }).catch((error) =>{
      console.log(error);
   });

   // updating many user
   db.collection('users').updateMany({
      age : 19
   },{
      $set : {
         name : 'Ayushi',
         age : 18
      }
   }).then((result) => {
      console.log(result);
   }).catch((error) => {
      console.log(error);
   });
});






