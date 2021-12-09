
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

   // fetching single user
   db.collection('users').findOne({name: 'its_shyam640', age : 18} ,(error,user) => {
      if(error){
         return console.log('Error : No such user exists!');
      }
      console.log(user);
   });

   // fetching array of users
   db.collection('users').find({age : 18}).toArray((error, users) => {
      if(error){
         return console.log('Error : No such user exists!');
      }
      console.log(users);
   });
});






