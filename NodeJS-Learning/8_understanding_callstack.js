// ****************************** Asynchronous NodeJs ********************************************
console.log('Starting Application');
setTimeout( () =>{
   console.log('first call');
},2000);
setTimeout( () =>{
   console.log('second call');
},0);
console.log('Closing Application');

// Even though second timeout has 0ms of time of execution but is printed after last console why? know reason below

// NOTE :- setTimeout()  is not a function of javascript. It is provided in nodejs but is written in c++.

// First -> run this file in terminal as    node 8_understanding_callstack.js
// second -> click on Run option above in vs code then click start debugging then choose nodeJs.

// What's and How and in which order console logs are printed in terminal
// Starting Application
// Closing Application
// second call
// first call


// We have three boxes for callstack , NodeApi  and callback queue


//=================================== Understanding callstack ====================================

// ********** stack Empty **********
// ********** Nothing on terminal ************
// ******** NodeAPI box empty *************
// ************ callback queue empty ***********

// 1)  first a main() is pushed into call stack means call stack starts.
// ********** stack has main() ***********
// ********** Nothing on terminal ************
// ******** NodeAPI box empty *************
// ************ callback queue empty ***********

// 2)  then first console is pushed and then it is poped back.
// ********** stack has main() ************ (console is pushed and then poped so that is not left in call stack)
// ********** "Starting Application" printed on terminal ************
// ******** NodeAPI box empty *************
// ************ callback queue empty ***********

// 3)  then setTimeout() function is pushed into callstack
// ********* stack has main() and setTimeout(...,2000)  ************
// ********** "Starting Application" printed on terminal ************
// ******** NodeAPI box empty *************
// ************ callback queue empty ***********

// 4)  now setTimeout(...,2000) is sent to nodeAPI for waiting. then setTimeout(...,0) is pushed to stack
// ******** stack has main() and setTimeout(...,0)   **********
// ********** "Starting Application" printed on terminal ************
// ******** NodeAPI box has setTimeout(...,2000) *************
// ************ callback queue empty ***********

// 5) now setTimeout(...,0) is sent to nodeAPI for waiting.
// ******* stack has main() *********
// ********** "Starting Application" printed on terminal ************
// ******** NodeAPI box has setTimeout(...,2000) and setTimeout(...,0)*************
// ************ callback queue empty ***********

// 6) at the same time when setTimeout(...,0) is sent to nodeApi box it is sent to callback Queue
// ******* stack has main() *********
// ********** "Starting Application" printed on terminal ************
// ******** NodeAPI box has setTimeout(...,2000)*************
// ************ callback queue has setTimeout(...,0) ***********

// 7) then last console is sent to callstack then popped in minimal time
// ******* stack has main() *********
// ********** "Starting Application" and "Closing Application" printed on terminal ************
// ******** NodeAPI box has setTimeout(...,2000)*************
// ************ callback queue has setTimeout(...,0) ***********

// 8) now callback queue's setTimeout(...,0) is pushed to stack
// ******* stack has main() and setTimeout(...,0) *********
// ********** "Starting Application" and "Closing Application" printed on terminal ************
// ******** NodeAPI box is empty*************
// ************ callback queue has setTimeout(...,2000) ***********

// 9) now setTimeout(...,0) => console log is sent to stack and then poped in minimal time and then setTimeout(...,0) is poped in same time
// ******* stack has main()*********
// ********** "Starting Application" and "Closing Application" and "second call" printed on terminal ************
// ******** NodeAPI box is empty*************
// ************ callback queue has setTimeout(...,2000) ***********

// 10) now callback queue's setTimeout(...,2000) is pushed to stack
// ******* stack has main() and setTimeout(...,2000) *********
// ********** "Starting Application" and "Closing Application" and "second call" printed on terminal ************
// ******** NodeAPI box is empty*************
// ************ callback queue is empty ***********

// 11) now setTimeout(...,2000) => console log is sent to stack and then poped in minimal time and then setTimeout(...,2000) is poped in same time
// ******* stack has main()*********
// ********** "Starting Application" and "Closing Application" and "second call" and "first call" printed on terminal ************
// ******** NodeAPI box is empty*************
// ************ callback queue is empty ***********

// 12) now main() is poped and application work ends
// ********** stack Empty **********
// ********** "Starting Application" and "Closing Application" and "second call" and "first call" printed on terminal ************
// ******** NodeAPI box empty *************
// ************ callback queue empty ***********
