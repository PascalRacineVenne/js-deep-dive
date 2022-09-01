const breakfastMenuIdeas = ['Buckwheat Pancakes'];
const dinnerMenuIdeas = ['Glazed Salmon', 'Meatloaf', 'American Cheeseburger'];

const allMenuIdeas = [
  ...breakfastMenuIdeas,
  'Harvest Salad',
  'Southern Fried Chicken',
  ...dinnerMenuIdeas,
];
console.log(allMenuIdeas);

// shift() : add at the end ... but mutating
// unshift() : add at the beginning ... but mutating

// *** array spread operator

// const otherMenuIdeas = [
//   ...breakfastMenuIdeas,
//   ...dinnerMenuIdeas,
//   ...allMenuIdeas,
// ];

// console.log(otherMenuIdeas);

// UPDATE OR DELETE with the Spread Operator ???

const allMenuIdeas2 = [
  ...breakfastMenuIdeas,
  'Harvest Salad',
  'Southern Fried Chicken',
  ...dinnerMenuIdeas,
];

// console.log(allMenuIdeas);
// console.log(allMenuIdeas.slice(1, 3));

// Update => change harvest salad to garden salad and remove meatloaf
// Let's assume we don't know the position of elements

const saladIndex = allMenuIdeas2.findIndex((idea) => idea === 'Harvest Salad');
// console.log(saladIndex);
// allMenuIdeas2[saladIndex] = 'Garden Salad';
// console.log(allMenuIdeas2);

// OR

const finalMenuIdeas = [
  ...allMenuIdeas2.slice(0, saladIndex),
  'Garden Salad',
  ...allMenuIdeas2.slice(saladIndex + 1),
];

console.log(finalMenuIdeas);

// Remove Meatloaf

const meatLoafIndex = finalMenuIdeas.findIndex((idea) => idea === 'Meatloaf');

const lastMenus = [
  ...finalMenuIdeas.slice(0, meatLoafIndex),
  ...finalMenuIdeas.slice(meatLoafIndex + 1),
];

console.log(lastMenus);
