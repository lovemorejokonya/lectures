const forEachInReverse = function(items, func) {
    for (let i = items.length - 1; i >= 0; i--) {
      func(items[i], i);
    }
  };
  
  forEachInReverse(['hello', 'lighthouse labs', 'and', 'world'], (word, index) => {
    console.log(`The word at index ${index} is "${word}"`);
  });

  // the index doesnt necesarily refer to `i` in abouve function. Lets switch
  forEachInReverse(['hello', 'lighthouse labs', 'and', 'world'], (index, word) => {
    console.log(`The word at index ${index} is "${word}"`);
  });