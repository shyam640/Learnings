const http = require('http');
const url = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=Kxo6sEiJGIIatyAnGsv66CRZqagirm7m&q=Gwalior&language=en-in&details=true';
const request = http.request(url, (response) =>{
   let data = '';
   response.on('data', (chunk)=>{
      data = data + chunk.toString();
   });
   response.on('end',() => {
      console.log(JSON.parse(data));
   });
});
request.end();