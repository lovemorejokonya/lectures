const arr = ['world', 'and', 'Lighthouse Labs', 'Hello']

const forEachInReverse = function(items, func) {
    for (let i = items.length - 1; i >= 0; i--) {
      func(items[i]);
    }
  };
  
//   forEachInReverse(['hello', 'Lighthouse Labs', 'and', 'world'], (word) => {
//     console.log(word);
//   });

  forEachInReverse(arr, word => console.log(word))