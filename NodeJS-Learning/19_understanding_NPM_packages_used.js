// chalk -> for coloring console logs -> npm i chalk
// bcrypt -> for storing password as hashed something like 30klsoe9jdfoeiu3.o9e0jf   -> npm i bcrypt
// nodemon -> for keep running terminal -> npm i nodemon
// express -> for models -> npm i express
// mongoose -> for interacting with mongodb data from terminal -> npm i mongoose
// mongodb -> for connecting and performing operations on mongodb database -> npm i mongodb
// router -> for routing models from another path -> npm i router
// heroku -> for running our application online -> npm i heroku
// jsonwebtoken -> for getting json web token for user authorisation -> npm i jsonwebtoken
// multer -> for image handling as express doesn't support image -> npm i multer
// sharp -> for changing image type to png and resize to specific size -> npm i sharp
// env-cmd -> for setting up environment variable -> npm i env-cmd
// supertest -> for help with testing our app -> npm i env-cmd
// bad-words -> for checking of bad words -> npm i bad-words

const chalk = require('chalk');
console.log(chalk.green('Success!'));
console.log(chalk.red.inverse('Error!'));



const bcrypt = require('bcrypt');
const fun = async () => {
   const password = 'its_shyam640';
   const hashedPassword = await bcrypt.hash(password,8);    // using 8 bcoz less then 8 can have security issue as it is easy to crack
   console.log(chalk.white(password) , chalk.cyan(hashedPassword));
   const isMatch = await bcrypt.compare('its_shyam640',hashedPassword);
   console.log(isMatch);
}

fun();
// output -> its_shyam640 $2b$08$o2hCh1Ml0Sg.9LftcYGW7eLHudfdBnGBpGekgT095PkTEG1Fqnq3W
// the random generated string is hashed password.



// JSON Web Token
const jwt = require('jsonwebtoken');
const fun2 = async () => {
   const token = jwt.sign({'_id':'kinevih39'},'this_is_random_text' , {expiresIn : '3 days'});
   console.log(token);
   const data = jwt.verify(token , 'this_is_random_text');
   console.log(data);
}
fun2();
// output : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJraW5ldmloMzkiLCJpYXQiOjE2MjU4MDI4OTZ9.XH3Z0bg_zg7gyRUg0c2cVgxUAgFLS0sJkIUmzL4ONVo
// string before first period (.) is base64 encoded json string header which contain information about what type of token it is .
// string between first and second period (.) is also a base64 encoded json string which we call as payload and it contains the data we provided , in our case it is id provided above.
// string after second period is signature which is to verify the token

// In-order to decode string between two peroids just go to https://base64decode.org and paste the string their.


