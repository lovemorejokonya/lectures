# JavaScript Objects

## Outline

- Data Types (recap)
  - Primitive Types
  - None Primitive Types
- Arrays (recap)
- Objects
  - Creating object litterals
  - Passing values to function
  - Operations on objects (read/set/(create/update))
  - Looping through object properties
- Functions as object methods  
- What is this? 

## Data Types

We have 2 types of data in JavaScript:

* Primitive Types
* Object Types

### Primitive Types 

7 primitive types:

* string
* number
* bigint
* boolean
* undefined
* null
* symbol

### None primitive Types

* None primitive data types such as array and objects are objects
* Even function are objects!

#### Array Recap

* Array is a data structure to store a list of elements into a single variable
* Every elements is associated with an index starting at 0

 `const player = ['Lebron', 'James', 'Lakers', 'Los Angels']`

* Each index represents something. firstname, lastname, team, city

 We find a limitation with arrays when we want to group related data of each items.

 `const players = ['Lebron', 'James', 'Lakers', 'Los Angels', 'Steph', 'Curry', 'Golden State Warriors', 'LA']`

 We would need to remember the order of the indices:

 - 0: First Name
 - 1: Last Name
 - 2: Team
 - 3: City

 Not very convenient! We need objects!

 #### Objects

* Objects are data structures that allow us to store related properties of each element
* Objects are made up of key/value pairs
* The key in an object is always a string
* The value can be any valid JavaScript value (primitive, array, object, or function)

``` js
const player = {
    first_name: 'Lebron',
    last_name: 'James',
    team: 'Lakers',
    city: 'Los Angels'
}
```

### Passing Values to Functions 

Passed by Value / Passed by Reference

* primitive types => value types
* object types => reference types

Primitive types are passed by value => the value is copied. It does not modify the original.

``` js
let last_name = "James";

const setLastName = function(last_name) {
    last_name = 'Curry';
}

setLastName(last_name);

console.log(last_name);
```

Object types are passed by reference => the reference is copied. It does modify the original object!

``` js
const player = {
    first_name: 'Lebron',
    last_name: 'James',
    team: 'Lakers',
    city: 'Los Angels'
};

const setLastName = function(player, newLastName) {
    player.last_name = newLastName;
}

setLastName(player, 'Curry');

console.log(player);
```

##### How to read the values from an object

* we can use bracket or dot notations:

`objectName['key']` or `objectName.key`

``` js
console.log(player.first_name);
console.log(player.team);
console.log(player.city);

console.log(player['first_name']);
console.log(player['team']);
console.log(player['city']);
```

We can __only__ use bracket [] notation when the key is stored in a variable:

``` js
const keyName = 'first_name'; // key name stored in a variable
console.log(player[keyName]); // prints 'Lebron'
console.log(player.first_name); // prints 'Lebron'
console.log(player.keyName); // prints undefined
```

##### How to set values in an object

We can set a value with the following syntax:

 `objectName.key = value`

``` js
player.highest = 20; // primitive type
player.former_teams = ['Raptord', 'Hawks', 'Clippers'] // none primitive type;
```

Using an existing key name is overwriting the value:

 `player.last_name = 'Curry' // we're changing the last_name`

We can even add a function:

``` js
player.printDetails = function() {
    console.log(
        `First Name: ${this.first_name} - Team: ${this.team} - City: ${this.city} - Highest Score: ${this.highest}`
    );
};

player.printDetails(); // calling our function
```

`this` refer to the `player` object; 

##### How to remove a key/value in an object

 `delete player.highest`

##### Looping through the properties of an object

* for...in loop
* Object.keys, Object.values, Object.entries

``` js
const player = {
    first_name: 'Lebron',
    last_name: 'James',
    team: 'Lakers',
    city: 'Los Angels'
};

for (let key in player) {
    console.log(key); // prints the key
    console.log(player[key]) //prints the value
}
```

``` js
const keys = Object.keys(player); // gives you an array of all the keys in the object
const values = Object.values(player); // gives you an array of all the values in the object

console.log(keys);
console.log(values);

for (let val of values) {
    console.log(val);
}
```

##### Looping through an array of objects

- we can do a lot more when we iterate through arrays and objects, by grabbing specific key-value pairs and doing what we want with them

``` js
const players = [{
        first_name: 'Lebron',
        last_name: 'James',
        team: 'Lakers',
        city: 'Los Angels',
        highest: 200
    },{
        first_name: 'Steph',
        last_name: 'Curry',
        team: 'GS Warriors',
        city: 'Los Angels',
        highest: 150
    },{
        first_name: 'Kawhi',
        last_name: 'Leonard',
        team: 'Clippers',
        city: 'Los Angels',
        highest: 100
    },
];

// getting the total runtime of the players
let totalScores = 0;

for (let playerObj of players) {
    totalScores += parseInt(playerObj.highest);
}

console.log(totalScores);
```