// What is socket io?
// Socket.IO enables real-time, bidirectional and event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed.


// Installing socket io -> npm i socket.io --save-dev        (to save it as dev dependency)

// Features of socket io : 
// -> reliability (fallback to HTTP long-polling in case the WebSocket connection cannot be established)
// -> automatic reconnection
// -> packet buffering
// -> acknowledgments
// -> broadcasting to all clients or to a subset of clients (what we call “Room”)
// -> multiplexing (what we call “Namespace”)


// Creating our first socket connection Example
const net = require('net');
const http = require('http');
const socketio = require('socket.io');

// Create a server 
const server = net.createServer();
// const server = http.createServer();
const io = socketio(server);

io.on('connection', () => {
   console.log('server open');
});

// Open server on port 9898
server.listen(9898, () => {
  console.log('Server listening on ', server.address().port);
  console.log('Server listening on ', 9898);
});



// Creating our first socket connection when using express :
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = 9999;

io.on('connection', () => {
   console.log('New WebSocket connection Done!');
});

server.listen(port , () => {
   console.log(chalk.green.bold('Listening on port ' + port));
});


// When Should I Write WebSocket Code?
// Besides a real-time stock or cryptocurrency tracker app, other common real-time use cases for WebSockets are:

// Chat apps
// Live location tracking on a map
// Live audience interaction
// Online auctions bid submission
// IoT device updates
// WebRTC call orchestration
// WebSockets create a TCP socket connection between multiple devices or processes. Similar functionality can be implemented using HTTP Long Polling or using a service like PubNub. Let’s go over some basic socket and WebSocket programming with Node.js.