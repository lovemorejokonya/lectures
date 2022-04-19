----------- today we will look at --------------

 - (REVIEW) Building an express server with EJS templates (Basic)
 - CRUD ()
 - RESTFUL conventions
 - Adding CRUD routes
 BREAK
 - Render vs Redirect pattern in multi-page apps
 - Forms (action, method)
 - Adding middleware ( <and what is this middleware ?>  )
 - Finishing up the server 
--------------------------------------------------

client makes req
- req carried over
- received by http server
- response sent back - 2 parts - content, status code


CRUD ---

Create - POST
Read - GET

Update - PUT / PATCH

Delete - DELETE

 reading ----- <%= %> - output something


 logic ----- <% %>

 ```javascript

  for (songId in songs) {
     console.log(songs[songId].author)
  }

 ```

// what we need on the server

 - Create
 - app.post - end point to handle the req
 - send a response
 - end point - app.get  - that will serve a page with a form
 - whats an endpoint --- app.get / app.post / api endpoint

// what we need for the form

 - front-end - form
- method - POST
- input - inside the form
- action - url - target endpoint
- button
 - button - submit