# Real World HTTP Servers

## Content

[ ] SECURITY
[ ] REST
[ ] Middleware
[ ] Organizing our code
[ ] Build JSON API
[ ] Alternative to Express

## Before that

[ ] Review of Authentication

Login ---

- submit our datat from client to eserve
- method , action, name
- server side 
- post method....create an endpoint to receive the data
- grab the data from the body of req
--
- check if the user exists in db
- check if the password matches
- store cookie
--- HTTP IS stateless

Security issue 1
- plain text passwords
- hash the password
- bcrypt

- bcrypt is one way
## security issue number 2
- encrypted
- cookie session to encrypt our cook
- setting the cookie - se
  - reading the cookie - get the values of the id

  ## security issue 3

- MITM Attack
- HTTPS / HTPP
- Godaddy - SSL - 90/yr
- Lets Encrypt - 3 months- expire - script
- 