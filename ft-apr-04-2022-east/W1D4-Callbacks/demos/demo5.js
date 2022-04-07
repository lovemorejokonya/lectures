// adding 2nd parameter for index

const forEachInReverse = function(items, func) {
    for (let i = items.length - 1; i >= 0; i--) {
      func(items[i], i);
    }
  };
  
  forEachInReverse(['hello', 'lighthouse labs', 'and', 'world'], (word, index) => {
    console.log(`The word at index ${index} is "${word}"`);
  });

  // Important scope review: 

  // Higher order functions - Whats the rationale?

// These two functions (the callback vs the higher-order function) now each have a single, 
// more concise responsibility, instead of doing both things. 
// This is the most important reason for creating HO functions.

// A function should have a sole reason to exist, 
// and delegate other responsibilities to other functions as needed.