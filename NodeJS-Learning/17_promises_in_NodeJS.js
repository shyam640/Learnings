// Callback

const doWorkCallback = (callback) => {
   setTimeout(() =>{
      // callback('This is my error!',undefined);
      callback(undefined,[1,4,9]);
   },2000);
}

doWorkCallback((error,result) => {
   if(error){
      return console.log('Error : '+error);
   }
   console.log(result);
});



// promises

const doWorkPromises = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve([7,3,0]);
      // reject('Things went wrong!');
   });
});

doWorkPromises.then((result)=>{
   console.log('Success : ' + result);
}).catch((error) => {
   console.log('Error : ' + error);
});


// Promise chaining
const add = (a,b) => {
   return new Promise((resolve,reject) => {
      setTimeout(() => {
         resolve(a+b);
      },2000);
   });
}

// Simple chaining
add(1,8).then((sum) => {
   console.log(sum);
   add(2,5).then((result) => {
      console.log(result);
   }).catch((e) => {
      console.log(e);
   });
}).catch((e) => {
   console.log(e);
});

// promise chaining
add(2,5).then((sum) => {
   console.log(sum);
   return add(sum , 3);
}).then((result) => {
   console.log(result);
}).catch((e) => {
   console.log(e);
});
