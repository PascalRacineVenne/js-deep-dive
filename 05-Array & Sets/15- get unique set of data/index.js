// multiple times the same thing...
// get unique values

const customerDishes = [
  'Chicken Wings',
  'Fish Sandwich',
  'Beef Stroganoff',
  'Grilled Cheese',
  'Blue Cheese Salad',
  'Chicken Wings',
  'Reuben Sandwich',
  'Grilled Cheese',
  'Fish Sandwich',
  'Chicken Pot Pie',
  'Fish Sandwich',
  'Beef Stroganoff',
];

// Set converted to an Array
const uniqueDishes = [...new Set(customerDishes)];
console.log(uniqueDishes);

// order is preserved
// Each value can only happen once.
// console.log(new Set([1, 2, 3]).size); // 3
// console.log(new Set([1, 1, 3]).size); // 2

// but Object with the same property aren't unique
// console.log(new Set([[1], [2], [3]]).size); // 3
// console.log(new Set([[1], [1], [3]]).size); // 3

// values of a Set we can iterate

// const numbers = new Set([[1], [1], [3]]);

// for (const num of numbers) {
//   console.log(num);
// }
