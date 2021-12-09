// Installing Node :- Go to node.js official https://nodejs.org/en/ website and install/download it.

// What is Node JS?
// It is server side javascript . It is built on chrome's V8 Javascript engine and chrome V8 engine is written in C++.

// Difference between chrome console and window terminal as nodejs?
// Chrome console has document and window feature while window terminal don't have
// Window terminal can work with global but chrome console cannot.

// Blocking and Non Blocking I/O
// Blocking I/o means blocking of same functionalities on web browser.
// Blocking I/o takes more time in fetching then non blocking I/o.

// Example :-
// Blocking I/o -> Save below code in js file with name blocking.js and run in terminal and note the time.
// const getUserSync = require('./src/getUserSync');
// const userOne = getUserSync(1);
// console.log(userOne);

// Const userTwo = getUserSync(2);
// console.log(userTwo);
// const sum = 1 + 33;
// console.log(sum);


// Non-Blocking I/o -> Save below code in js file with name non_blocking.js and run in terminal and note the time.
// const getUser = require('./src/getUser');
// getUser(1, (user)=>{
//    console.log(user);
// });
// getUser(2, (user)=>{
//    console.log(user);
// });
// const sum = 1 + 33;
// console.log(sum);