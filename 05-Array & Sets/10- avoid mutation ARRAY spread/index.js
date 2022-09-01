const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

// const allMenuIdeas = lunchMenuIdeas;

// allMenuIdeas.push('club sandwich');
// console.log(allMenuIdeas);
// console.log(lunchMenuIdeas);

// Overwritten first array
// Avoid mutating the array.

// 1 -
// allMenuIdeas.concat('club sandwich');

// 2- array spread operator
// access to a copy of the array
const allMenuIdeas = [...lunchMenuIdeas];

allMenuIdeas.push('club sandwich');

console.log(allMenuIdeas);
