// CRUD => Create , Read , Update , Delete
// More about Mongo CRUD operation at https://docs.mongodb.com/manual/crud/

// const mongoDB = require('mongodb');
// const mongoClient = mongoDB.MongoClient;
// const objectID = mongoDB.ObjectID;
// ******** short-hand to write above code *************
const {MongoClient , ObjectID} = require('mongodb');
const chalk = require('chalk');


const connectionURL = 'mongodb://127.0.0.1:27017';        // 27017 is basically a localhost port
const databaseName = 'task-managing';
const id = new ObjectID();


// Connecting to the mongo db database
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client) => {
   if(error){
      return console.log(chalk.red.inverse('Error : connection failed!'));
   }
   console.log(chalk.green.inverse('Success!'));
   const db = client.db(databaseName);

   
});






