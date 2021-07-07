const express = require('express')
const PORT = 3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
app.use(bodyParser.urlencoded())
app.use(cookieParser())

app.set("view engine", "ejs")

const {authenticated, getUserWithId} = require("./helpers")

const userDB = [
    { id: 1, name: "LoveJ", email: "lovej@mail.com", password:"123"},
    { id: 2, name: "MaryJ", email: "maryj@mail.com", password:"123"}
]

app.get("/", (req, res) => {
    let user = getUserWithId(req.cookies.user_id, userDB)
    // console.log(`user: ${JSON.stringify(user)}`)
    res.render("index", {user})
})

app.get("/protected", (req, res) => {
    let user = getUserWithId(req.cookies.user_id, userDB)
    if(user){
        res.render("protected", {user})
    } else {
        res.send("not authorised")
    }
})


app.post("/login", (req, res)=>{
    // console.log(`hey: ${JSON.stringify(req.body)}`)
    let result = authenticated(req.body, userDB)
    if (result.error){
        res.send(result.error)
    } else {
        res.cookie('user_id', result.data.id);
        res.redirect("/")
    }
})

app.post("/logout", (req,res)=>{
    res.clearCookie("user_id")
    res.redirect("/")
})

app.listen(PORT, ()=> console.log(`server now listening on port: ${PORT}`))