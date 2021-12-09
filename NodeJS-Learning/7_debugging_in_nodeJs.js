// Method 1 :
// Using many console log to print data and get to know where do you made mistake. This is considered to be sometimes the worst method.

// Method 2 :
// Using keyword 'debugger' provided with nodejs. To use this, you should use command as 
// node inspect ........
// if above command doesn't works then use   node --inspect-brk ............

// for example :
const doOperations1 = function (a,b){
   const c1 = a + b;
   const d1 = a - b;
   const e1 = a / b;
   console.log("c = " + c1 + " d = " + d1 + " e = " + e1);
}
doOperations1(4,2);


// Debugging using method 1 i.e. console log's
const doOperations2 = function (a,b){
   const c2 = a + b;
   console.log(c2);
   const d2 = a - b;
   console.log(d2);
   const e2 = a / b;
   console.log(e2);
   console.log("c = " + c2 + " d = " + d2 + " e = " + e2);
}
doOperations2(4,2);
// Problem with method 1 => Using too many console log's makes code more tough and doesn't remains clean anymore.


// Debugging using method 2 i.e. using keyword 'debugger'
const doOperations3 = function (a,b){
   const c3 = a + b;
   const d3 = a - b;
   const e3 = a / b;
   debugger;
   console.log("c = " + c3 + " d = " + d3 + " e = " + e3);
}
doOperations3(4,2);
