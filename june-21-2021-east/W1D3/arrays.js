const player = ['Lebron', 'James', 'Lakers', 'Los Angels']

const players = ['Lebron', 'James', 'Lakers', 'Los Angels', 'Steph', 'Curry', 'Golden State Warriors', 'LA']

// we can iterate through each item and print it
player.forEach(item => console.log(item))

// iterate through each item and also reference index
players.forEach((player, idx) => {
   //conditionally do something base on value of index
   idx === 4 ? console.log(`index: ${idx}, player: ${player} \n`) : ''
})