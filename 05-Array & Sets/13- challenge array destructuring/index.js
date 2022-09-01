// Challenge:
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = [
  'Salmon Rillettes',
  'Grilled Tuna Provencal',
  'Fish and Chips',
];
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers'];

// Modify these four variables first
const [chefsFishDishes, ...regularFishDishes] = fishDishes;
// console.log(chefsFishDishes, regularFishDishes);

const [regularMeatDishes, ...chefsMeatDishes] = meatDishes;
// console.log(regularMeatDishes, chefsMeatDishes);

// Finally, use the spread operator to create these two arrays as well
const chefsDishes = [chefsFishDishes, ...chefsMeatDishes];
const regularDishes = [...regularFishDishes, regularMeatDishes];

console.log({ chefsDishes, regularDishes });
