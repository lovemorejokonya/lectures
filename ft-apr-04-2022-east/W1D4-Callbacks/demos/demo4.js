// forEach In reverse

const myArray = ['hello', 'Lighthouse Labs', 'and', 'world']

const forEachInReverse = function(items, func) {
    for (let i = items.length - 1; i >= 0; i--) {
      func(items[i]);
    }
  };
  
forEachInReverse(['hello', 'Lighthouse Labs', 'and', 'world'], (word) => {
    console.log(word);
});

myArray.forEach((name, idx ) => {
    console.log(`item on ndex: ${idx} is ${name}`)
  })