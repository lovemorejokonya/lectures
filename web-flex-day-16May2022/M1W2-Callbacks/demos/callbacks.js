const items = [1, 2, 3, 4, 5, 6];
// for (const item of items) {
//   console.log(item);
// };

// can be rewritten as:

const logEach = function(items) {
  for (const item of items) {
    console.log(item);
  }
};

// logEach(items)

// but if we want something more abstract and single-purpose

const forEach = function(items, action) {
  for (const item of items) {
    action(item);
  }
};

// forEach(items, function(item){
//     console.log(item)
// })

const printEven = (num) => {
    if (num % 2 === 0){
        console.log(num)
    } else {
        console.log(`skipping ${num} - not an even number`)
    }
}

forEach(items, printEven)



// forEach is therefore a Higher-Order function. Talk about how Array has forEach built in which does exactly that.

