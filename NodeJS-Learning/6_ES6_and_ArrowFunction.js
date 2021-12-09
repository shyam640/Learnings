const chalk = require("chalk");

// Simple function
const square = function (x){
   return x*x;
}
console.log(square(4));

// Arrow function
// const add = (a,b) => {
//    return a+b;
// }
// or 
const add = (a,b) => (a+b);
console.log(add(4,-1));

// When to use arrow function and simple function?
//  When defining a class or object we do not use arrow function
// Example -> Simple function
const event1 = {
   name : 'Party1',
   GuestList : function (){
      console.log(chalk.bgCyan('Guest list for ')+this.name+chalk.bgCyan(' is here'));
   }
}
event1.GuestList();
// You can access object using simple function

// Example -> Arrow Function
const event2 = {
   name : 'Party2',
   GuestList : () => {
      console.log(chalk.bgCyan('Guest list for ')+this.name+chalk.bgCyan(' is here'));
   }
}
event2.GuestList();
// Arrow function doesn't allow accessing object. If you want to use it then use standard function definition.




const event3 = {
   name : 'Party3',
   GuestName : ['shyam','piyu','parth'],
   GuestList : function () {
      console.log(chalk.bgCyan('Guest list for ')+this.name+chalk.bgCyan(' is here'));
      this.GuestName.forEach((guest) => {
         console.log(guest + chalk.green(' is attending ') + this.name);
      });
   }
}
event3.GuestList();
