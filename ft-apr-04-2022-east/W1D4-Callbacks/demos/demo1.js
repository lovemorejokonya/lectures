// review

// Variables - What are they?
// they store values

const g = 9.81
let last_name = "Edwards"
const madeThePlayoffs = false
const finalsTeams = ["Raptors", "Lakers"]

const obj = { 
    name: "Lovemore", last: "Jokonya", //sayName: greetings
}

// function expression
const myFunction = function (){
    console.log("my function")
}
myFunction()
// function definition - Hoisting - lifting up - good or bad?
function myOtherFunction () {
    console.log("my other function 2")
}
function myOtherFunction () {
    console.log("my other function 1")
}
myOtherFunction()
// function call

// anonymous function - no name function
// function () {
//     console.log("I dont have a name")
// }

const greetings = function (name) {
    console.log("Hi there! ", name)
    name()
}
// we can pass parameter into a function as a raw value 'declaration'
greetings("LoveJ")

// can numbers be passed into functions?
// can objects be passed into functions?
// can arrays  be passed into functions?

// we can pass parameter into a function from a variable
greetings(last_name);

const sayBye = function () {
    console.log("GOODBYE!!!!")
}

greetings(sayBye)