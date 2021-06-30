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


const replace = function(ref) {
    ref = {};           // this code does _not_ affect the object passed
};

const update = function(ref) {
    ref.key = 'newvalue';  // this code _does_ affect the _contents_ of the object
};

const a = { key: 'value' };
replace(a);  // a still has its original value - it's unmodfied
update(a);   // the _contents_ of 'a' are changed