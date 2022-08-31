const isAuthenticated = false;
// let cartItemCount = 0;

// if (isAuthenticated) {
//   // add item to cart
//   cartItemCount = 1;
// } else {
//   // tell user to login
//   console.log('Please log in!');
// cartItemCount = 0
// }

const cartItemCount = isAuthenticated ? 1 : 0;
console.log(cartItemCount);

// greet user on theur age

const age = 16;
// let greeting;
// const young = age < 10;

// if (age < 10) {
//   greeting = 'Hey there';
// } else {
//   greeting = "That's an interesting age";
// }

// const greeting = young ? 'Hey there' : "That's an interesting age";

// console.log(greeting);

// const age = 20;

// let greeting;

// if (age < 10) {
//   greeting = 'Hey there';
// } else if (age > 18) {
//   greeting = 'Greetings';
// } else if (age > 10) {
//   greeting = "What's up?";
// } else {
//   greeting = "That's an interesting age!";
// }
// console.log(greeting);

// WRONG APPROACH
// const greeting =
//   age < 10
//     ? 'Hey there'
//     : age > 18
//     ? 'Greetings'
//     : age > 10
//     ? "what's up?"
//     : "That's an interesting age";

// console.log(greeting);
