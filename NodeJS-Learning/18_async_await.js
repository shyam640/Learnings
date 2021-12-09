// simple function
const fun1 = () => {

}
console.log(fun1());
// output : undefined


// async function
const fun2 = async () => {
   
}
console.log(fun2());
// output : Promise {undefined}



// Understanding async-await more deeper
// promise function to add : 
const add = (a,b) => {
   return new Promise((resolve,reject) => {
      setTimeout(() => {
         resolve(a+b);
      },2000);
   });
}

const addValues = async () => {
   const sum1 = await add(2,5);              // takes 2 sec
   const sum2 = await add(sum1,8);           // takes 2 sec
   const sum3 = await add(sum2,3);              // takes 2 sec
   return sum3;
}

addValues().then((result) => {
   console.log(result);
}).catch((e)=> {
   console.log(e);
});

// Output take 6s to print


// Difference between async-await and promise and Which is better?
// 1. The async function returns a promise. The converse is also true. Every function that returns a promise can be considered as async function.
// 2. await is used for calling an async function and waits for it to resolve or reject.
// 3. await blocks the execution of the code within the async function in which it is located.
// 4. If the output of function2 is dependent on the output of function1, I use await.
// 5. If two functions can be run in parallel, create two different async functions and then run them in parallel.
// 6. To run promises in parallel, create an array of promises and then use Promise.all(promisesArray).
// 7. Every time you use await remember that you are writing blocking code. Over time we tend to neglect this.
// 8. Instead of creating huge async functions with many await asyncFunction() in it, it is better to create smaller async functions. This way, we will be aware of not writing too much blocking code.
// 9. Another advantage of using smaller async functions is that you force yourself to think of which async functions can be run in parallel.
// 10. If your code contains blocking code, it is better to make it an async function. By doing this, you are making sure that somebody else can use your function asynchronously.
// 11. By making async functions out of blocking code, you are enabling the user (who will call your function) to decide on the level of asynchronicity they want.

