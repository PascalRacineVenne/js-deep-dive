const finalMenuItems = [
  'American Cheeseburger',
  'Southern Fried Chicken',
  'Glazed Salmon',
];

// let first = finalMenuItems[0];
// let second = finalMenuItems[1];
// let third = finalMenuItems[2];

// console.log(first, second, third);

// destucturing
// let [first, second, third] = finalMenuItems;

// console.log({ first }, { second }, { third });
// SWAP VALUE
// [third, second, first] = [first, second, third];
// console.log({ first }, { second }, { third });

// getting one value and gather the rest

// rest operator
const [winner, ...losers] = finalMenuItems;
console.log({ winner, losers });

// {winner: 'American Cheeseburger', losers: Array(2)}
// losers: (2) ['Southern Fried Chicken', 'Glazed Salmon']
// winner: "American Cheeseburger"
