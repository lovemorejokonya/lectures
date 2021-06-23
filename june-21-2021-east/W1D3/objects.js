const player = {
    first_name: 'Lebron',
    last_name: 'James',
    team: 'Lakers',
    city: 'Los Angels'
}

const player2 = {
    first_name: "Steph"
}

player2.last_name = "Curry"
player2.team = "GS Warriors"
player2.city = "LA"

//function to print our object
const printObj = obj => console.log(`object: ${JSON.stringify(obj)}`)

printObj(player2)

// read values
console.log(player2.team)

// set values
