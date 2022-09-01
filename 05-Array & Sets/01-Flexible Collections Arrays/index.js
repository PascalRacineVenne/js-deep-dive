// const todos = {};

// const todo1 = {
//   text: 'Wash the dishes',
//   complete: false,
// };
// const todo2 = {
//   text: 'Wash the laundry',
//   complete: false,
// };

// todos[1] = todo1;
// todos[2] = todo2;

// remove last element, we need to know the key...
// Limitation of object, theydon't preserve their order.
// Order of the keys are preserved.
// What if the key is changed?

// console.log(todos);

// **** WORK WITH ARRAY
const todos = [];

const todo1 = {
  text: 'Wash the dishes',
  complete: false,
};
const todo2 = {
  text: 'Wash the laundry',
  complete: false,
};

// ADD
todos.push(todo1, todo2);

console.log(todos);
console.log(todos.length);

// remove last .pop()

todos.pop();
console.log(todos);
