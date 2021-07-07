
# W3D3 - User Authentication with Express

## Today we looked at

- HTTP Lifecycle review
- Creating a login form
- Server-side authentication
- HTTP is stateless
- Cookies
- Implementing cookies in the server


## gotchas when creating a form 

- action - target endpoint  url
- method - specify HTTP Method, POST or GET
- input - must have a name

## gotchas on server side endpoint
- (req, res) => {} - order of req and res matters
- grab form inputs using req.body
- always return a response. res.send or res.render
- make sure it doesnt return a response more than once
- grab url parameters using re.params

## HTTP is stateless

What do we mean by statelessness ?

- The server doesn't remember you
- The server process every request like a new request

What is state?

- Application state is server-side data which servers store to identify incoming client requests, their previous interaction details, and current context information.
- Ex: login state, logout state

#### Pros and Cons

This statless protocol works well with request - responses. Meaning that each request is independant from one another.
The less complexity we have per each request, the easier it is to handle more and more requests.

The drawbacks of this
 - impossible to track context
 - can't do realtime data transfer
 - each time have to send context

### Problem
When a user fills out a form, they are able to see their name and password on the main page. Otherwise they see "You are not logged in"

## Using cookies to remember the user

### How cookies work

- a cookie is a small text file that is stored by a browser on the user’s machine

- a collection of key-value pairs that store information
  - shopping-cart, game scores, ads, and logins

`name=lovemore`

- The response header will set the cookie

  Set-Cookie: <em>value</em>[; expires=<em>date</em>][; domain=<em>domain</em>][; path=<em>path</em>][; secure]

- The browser will store the cookie
- The browser will send the cookie in the request headers of subsequent requests
- can be set for a specific domain
- can have an expiration date, if not session cookie

- One part we didnt touch on much is security of cookies and what can be done about that...

#### Cookie Security

- cookies are not secure
- vulnerable to sniffing -> request is intercepted along the way. The captured cookie is then set manually
- solution: https
- cookie option
  - secure -> ensure only https
  - httpOnly -> prevents javascript to access cookies

## How can we secure cookies

- Cookies are stored in plain text in the browser
- You can access it in developer tools
- How can we prevent this?
- Encrypted cookies

### Bcrypt

- Bcrypt will hash the password with a salt to make it more resistant to attacks
- Bcrypt will slow down the server. It should be async. Tricky!

#### Difference between encrypted and hashing

##### Hash

- turns a message into a combination of text + number + special characters
- Hashing is a 1 way process. You cannot retrieve the original string from the hash
- Useful for passwords
- The password entered will be hashed and the 2 hashed will be compared

##### Encryption

- Encryption turns data into a series of unreadable characters
- Encrypted strings can be reversed if you have the key

