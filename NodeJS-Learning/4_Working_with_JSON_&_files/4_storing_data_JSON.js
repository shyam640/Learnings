// JSON -> JavaScript Object Notation is just a string data having object which can be accessed with function


const book = {
   title : 'Cracking the Coding Interview',
   author : 'Gayle Lakhhmann Mcdowell',
   Edition : '6th Edition'
}

// Data in string format i.e. you cannot access 
const bookData = JSON.stringify(book);
console.log(bookData);

const bookObject = JSON.parse(bookData);
console.log(bookObject);
console.log(bookObject.Edition);

// Writing to a JSON file
const fs = require('fs');
// fs.writeFileSync('JSON_file.json',bookData);           // commenting this when using nodemon

// Reading from a JSON file
const dataBuffer = fs.readFileSync('JSON_file.json');
const dataJSON = dataBuffer.toString();
const data_JSON_format = JSON.parse(dataJSON);
console.log(data_JSON_format);

// Adding extra data to file
data_JSON_format.Year = '2014';
data_JSON_format.Type = 'Hard Copy';
console.log(data_JSON_format);
