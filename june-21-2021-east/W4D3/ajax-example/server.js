'use strict';

const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const hostname = 'localhost'
const PORT = 8080
const publicDir = __dirname + '/public'
const path = require('path');

const posts_data = [
  {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
  "userId": 1,
  "id": 3,
  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
]  

// home page
app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "/index.html"));
});

app.get ("/test", function(req, res) {
  res.json({message: "testing works"})
})

app.get ("/posts", function(req, res) {
  res.json(posts_data)
})


app.use(express.static(publicDir));


// start the server
app.listen(PORT, hostname, function(){
	console.log(`Server listening at PORT: ${PORT}`);
});
