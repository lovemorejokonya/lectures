#### W2D3 - Networking with TCP + HTTP

Welcome to Week 2 Day 3 !!! Today we will be talking about Networking and TCP ( with a little bit of a touch on HTTP)

#### Networking

We talked first what is networking in general.

Networking is the exchange of information and ideas among people with a common profession or special interest, usually in an informal social setting. Networking often begins with a single point of common ground.

These single points on common ground become a basis for a set of rules to govern this. The word for that is `Protocol`. 

#### What is a protocol?

- It's a formalized way to communicate.
- Spoken language is a communications protocol, as is body language! But we're getting philosophical here...
- In computer science, it's a set of rules defining a way for two systems to communicate in a way both can make sense of what's going on.

Example of rules:

- Person A says something to Person B
- Person B listens to what person A has to say
- When person A finished, Person B can start talking

A finer rule sets introduce layers of complexity or less complexity
E.g
finer school rules
- use slack or discord only
- no talking during lecture

finer set of rules up the tree
- Don't talk during dinner
- Baby doesnt come to basement during working hours (new covid rules)

##### Communication Between Computers

For computers its almost the same thing.

The web is like a lasagna of protocols

- At the bottom layer there's IP -> Internet Protocol
- On top of it there's TCP -> Transmission Control Protocol
- And on top that we have HTTP -> Hyper Text Transfer Protocol
There are other protocols
- FTP -> File Transfer Protocol
- SMTP -> Simple Mail Transfer Protocol
- XMPP -> Extensible Messaging and Presence Protocol (used by Slack!)
- SSH -> Secure Shell
...and hundreds of others

First, computers communicate between a medium.

Types of medium:

 - wire
 - wifi
 - radio

 Second, we can set some rules ( _restrictions_ ) on the said medium.

 - can send a message only when the key 'y' is pressed
 - every odd number order computer gets a message in lowercase
 - every even number gets a message in binary


#### TCP - (Transport Control Protocol)

TCP - A set of rules that two machines agreed to abide by to communicate with each other.
The protocol that allows us to transfer data, but only when we are connected.

##### Rules

*AS LONG AS YOU HAVE A CONNECTION.........*

Client can send messages
Client can recive messages
Server can broadcast a message to all clients
Server can recive client messages

#### DEMO - Basic Chat Server

We will build a chat server using `tcp`.
We will be using a built in node module called `net`.

The client connects to the server, and once the connection has been established the client can send messages to the server, which in turn, once the server recieves it, it will broadcast that same message to all of the connected clients.
We will use `stdin` to let the client write any message they want.

### Client (Basic)

```js
const net = require('net');
const stdin = process.stdin;
//We need to specify the address and the port to connect to
const client = net.createConnection({
  host: 'localhost',
  port: 3000
});
//We need the encoding to tell the server and the client what kind of data are we transfering
client.setEncoding('utf8');
//When I, the client finally connect...........
client.on('connect', function() {
  client.write('I have connected!!!');
})
```

#### Server (Basic)

```js
const net = require('net');
const stdin = process.stdin;

const server = net.createServer();
// when someone connects................
server.on('connection', function(conn) {
  //Set encoding just like on the client
  conn.setEncoding('utf8');
  //when one of the connections sends data and we recieve it.............
  conn.on('data', function(data) {
    console.log("connected user says:", data);
  })
  console.log("someone has connected");
})

server.listen(3000)
````

First code we started with was just how to connect the client and the server. Then we added a basic way to send a message once a client connects.

Then we added a way for the client to type using `stdin` and send that message to the server which it gets and `broadcasts`back to everyone else (see `server.js` and `client.js`)

#### HTTP - (Hyper Text Transfer Protocol, aka - rules (or protocol) on top of TCP)

We also talked at the very end of the lecture about HTTP. We talked about how the client requests some page from the server.

The client gives a `TYPE` of a request method

- GET - READ data from the server
- POST - SEND data and CREATE an object on the server
- PUT/PATCH - SEND data and UPDATE an object on the server
- DELETE - DELETE data on the server

The client also sends a `route` to the server on which method should event should run for that route

- GET `www.reddit.com/r/dogs` - Hey reddit, please give me the page for the subreddit `dogs`

- GET `https://www.amazon.ca/gp/product/B00STSZ77G/` - Hey amazon give me the desciption for product number `B00STSZ77G`

Once the server receives and process the request, it sends back a response which contains the following:

*Response Status*

Contains a response code and a message
Response codes are divided in series
- 100 series = informational
- 200 series = ok
- 300 series = redirection
- 400 series = client error
- 401 unauthorized
- 403 forbidden
- 404 not found
- 500 series = server error

Response headers - which information that is being returned.

and finally the...

Response Body - the content that the client requested. (usually HTML or JSON)

We will be talking alooooooooot more about *HTTP* and you will be using it for the remainder of bootcamp so be patient and dont get overwhelmed with the info above :)