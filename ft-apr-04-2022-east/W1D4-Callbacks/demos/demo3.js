// but if we want something more abstract and single-purpose

const forEach = function(items, action) {
    for (const item of items) {
      action(item);
    }
  };

  // forEach is therefore a Higher-Order function. 
  // Array has forEach built in which does exactly that.