const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Creating port 
const port = process.env.PORT || 3000;

// Defining path to public directory where we have our html and other files
const pathToPublicDir = path.join(__dirname,'../public');

app.use(express.static(pathToPublicDir));

// rendering our app using express
app.get('', (req,res) => {
   res.render('index',{
      title : 'Title',
      name : 'its_shyam640'
   });
});

// when connection is made successfully
io.on('connection', () => {
   console.log('Express socket connection made successfully!');
});

// starting server 
server.listen(port , () => {
   console.log(`Listening on port ${port}`);
});