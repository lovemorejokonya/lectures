// Lets make a program that prints each item in an array.

const items = [1, 2, 3];
for (const item of items) {
  console.log(item);
};

// can be rewritten as:
// We then want to rewrite it as a function, So it can be more modular.

const logEach = function(items) {
  for (const item of items) {
    console.log(item);
  }
};
