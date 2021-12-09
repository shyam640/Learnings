// Download mongoDB from https://www.mongodb.com/try/download/community in zip type else you may face issue.
// The new version of mongodb comes with inbuilt mongodb gui i.e. mongodb compass and mongodb bash to perform various tasks.
// Create a new project on mongo db website and after that create a new cluster and then click on connect and then click on mongodb compass connect.
// In Vs Code open terminal .
// Now go to folder where you extracted mongodb zip then go to bin folder and copy path to it.
// Now in Vs code terminal run command :
//    <full_path_to_mongo_db_folder> --dbpath=<full_path_to_where_you_want_to_store_data>
// For Example :- E:\mongodb\bin\mongod.exe --dbpath=E:\mongoData
// Install node module for mongodb using command 'npm i mongodb'


const {MongoClient , ObjectID} = require('mongodb');

const id = new ObjectID();

//understanding object id :-
console.log(id);          // gives id something like 60e55c94ec52d829e05997b6
console.log(id.getTimestamp());      // gives exact time something like 2021-07-07T08:03:02.000Z
console.log(id.id);        // gives buffer to understand actually what id looks like <Buffer 60 e5 5f b6 23 c2 ac 2c b4 7c a9 70>
console.log(id.id.length , id.toHexString().length);      // more understanding of object id and we get "12 24" in terminal.