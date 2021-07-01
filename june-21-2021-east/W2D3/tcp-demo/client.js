// require the net module
const net = require('net');

// define your port
const port = 8080;

// createConnection with net module 
// and parse object with port and host
const client = net.createConnection({
    port: port, 
    host: 'localhost',
});

// set the encoding to utf-8
client.setEncoding('utf8');

// send data to server using process.stdin.on(data) and client.write
process.stdin.on('data', function(message){
    client.write(message);
});

// console log a message when connection is established using the on connect handler
client.on('connect',function(){
    console.log("client is connected to server.");
});

// console log a message when a message is received using the on data handler
client.on('data',function(message){
    console.log('server sent:',message);
});

// console log a message when a the connection is ended using the on end handler
client.on('end', function(){
    console.log('client disconnected from server');
});