// **** SHORT CIRCUITING ****

const response = 'Reed';
const isEmailVerified = true;

let username;

// if (response) {
//     username = response;
// } else {
//   username = 'guest';
// }

// const username = response ? response : 'guest';

// console.log(username);

// OR ||

// const username2 = response || 'guest';
// console.log(username2);
// fallback value.

// Multiple conditions.
// if (response) {
//   if (isEmailVerified) {
//     username3 = response;
//   }
// } else {
//   username3 = 'guest';
// }

const username3 = (isEmailVerified && response) || 'guest';

// operator precedence
// 1) && is first
// 2) () highest precedence.
