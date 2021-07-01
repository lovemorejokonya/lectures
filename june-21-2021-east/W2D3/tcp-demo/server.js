const net = require('net');
const port = 8080;

const server = net.createServer();

// we need an array to store the connected clients.
const connectedClients = [];

// function to broadcast messages
// loops through all connectedClients and sends a message
// to all clients except the one that sent the original message
const broadcast = function(currentClient,message){
    for (let connectedClient of connectedClients){
        console.log('testing client named:',connectedClient.name);
        if(connectedClient !== currentClient){
            connectedClient.write(`${currentClient.name} says: ${message}`);
        }
    }
};

server.on('connection', function(client){
    console.log('Client is connected');

    // add the current client to the list of connected clients
    connectedClients.push(client);

    // set the encoding to utf8
    client.setEncoding('utf8');

    // send message to the client who's just connected
    client.write("Welcome to my awesome server! ⛵");

    client.on('data', function(message){
        // a way to setName of client when they start their message with setName
        if (message.startsWith('setName ')){
            const clientName = message.replace(/setName /, '');
            console.log('setting client name to:',clientName);
            // adding a "name" key and value to the client
            // object.key = value
            client.name = clientName;
        }
        console.log(`Message received from client: ${client.name} - ${message}`);
        
        // broadcast the message
        broadcast(client,message);
    });

});

// have the server listen to a particular port for incoming connections
server.listen(port, function(){
    console.log(`Server is listening on port ${port}`);
});