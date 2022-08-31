const username = 'john';

// // const capitalize = (name) => {
// //   return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
// // };
const capitalize = (name) => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

// console.log(capitalize(username));

// callback functions
function greetUser(name, callback) {
  return callback(capitalize(name));
}

// callback : function called after another function
// callback is a Higher Order Function

// const result = greetUser(username, (name) => {
//   return `Hi there ${name}`;
// });

const result = greetUser(username, (name) => `Hi there ${name}`);

console.log(result);
