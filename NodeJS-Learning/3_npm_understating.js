// What is npm?
// npm is a large open source node package manager. To use node modules run "npm install" in terminal.

// Using npm's chalk package to display colorful commands and console logs.
// Run command -> npm install chalk
const { constants } = require('buffer');
const chalk = require('chalk');
const greenMsg = chalk.green('Success Install!');
console.log(greenMsg);

const redMsg = chalk.red('This is Red');
console.log(redMsg);
const redMsgAgain = chalk.red.bold.red('This is red highlighted');
console.log(redMsgAgain);


// Using nodemon npm package to display real time changes in script.
// Run command -> npm install -g nodemon
const nodemonCheck = chalk.red.inverse.bgGray('This nodemon package is working');
console.log(nodemonCheck);


// Using yargs npm package to 
// Run command -> npm install yargs@17.0.1 
const yargs = require('yargs');
console.log(yargs.argv);
// changing yargs version
yargs.version('14.0.3');

// creating adding command
yargs.command({
   command:'add',
   describe: 'Add numbers',
   handler: function(){
      console.log('Adding numbers');
   }
});

yargs.command({
   command: 'subtract',
   describe: 'Subtracting numbers',
   builder: {
      title: {
         describe: 'This is subracting function title'
      }
   },
   handler: function(argv){
      console.log('Subtracting Numbers',argv);
   }
});

// writing this 
console.log(yargs.argv);
// or 
yargs.parse();