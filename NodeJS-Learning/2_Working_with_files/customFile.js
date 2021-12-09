const name = '@its_shyam640';

const add = function (a,b) {
   return a+b;
}

const getData = function(){
   return "This text is returned from customFile.js to nodefile.js";
}

// If we write multiple modules exports statement then only last statement is active.
module.exports = name;
module.exports = add;
module.exports = getData;