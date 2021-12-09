setTimeout( () => {
   console.log('This function is callback function');
},2000);

// What is callback function?
// It is nothing more then a function which has to execute a piece of code after some specific time.

// Simple method : This will work
const geoCode1 = (address,callback) =>{
      const data1 = {
         latitude: 21.93,
         longitude: -190.93
      }
      return data1;
}
const data1 = geoCode1('gwalior');
console.log(data1);

// Simple method : This will create work
const geoCode2 = (address,callback) =>{
   const data2 = {
      latitude: 21.93,
      longitude: -190.93
   }
   return data2;
}
const data2 = geoCode2('gwalior');
console.log(data2);

// Now using callback to remove above problem
const geoCode3 = (address,callback) =>{
   setTimeout( () =>{
      const data3 = {
         latitude: 21.93,
         longitude: -190.93
      }
      callback(data3);
   },2000);
}
console.log('gwalior',(data3)=>{
   console.log(data3);
});



// One more example to show you the callback functionality
const add = (a , b , callback) => {
   setTimeout( () =>{
      callback(a+b);
   },2000);
}
add(3,9,(sum)=>{
   console.log(sum);
});