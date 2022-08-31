// Objects have limitation.

// const nums = {
//   1: 1,
//   true: true,
// };

// console.log(Object.keys(nums));
// implicit conversion to string;

// MAPS Object +

// When to use map over plain Object

// new Map([
//   ['key', 'value']
// ]);

// const map1 = new Map([
//   [1, 1],
//   [true, true],
// ]);

// console.log(map1);

// map1.set('key', 'value');
// console.log([...map1.keys()]);

// // ORDER IN MAP IS LIKE ARRAYS. Insertion order.
// map1.forEach((key, value) => {
//   console.log(`key is ${key} and value: ${value}`);
// });

// Object as key in MAP

// const user1 = { fName: 'john' };
// const user2 = { fName: 'paul' };

// const secretKey1 = 'aslasdf';
// const secretKey2 = 'qwertyjhg';

// const secretKeyMap = new Map([
//   [user1, secretKey1],
//   [user2, secretKey2],
// ]);

// console.log(secretKeyMap);

// const key = secretKeyMap.get(user1);
// console.log(key);

// // garbage collection remove... only accept objects as key
// // *** WEAKMAP ***
// const secretKeyMap2 = new Map([
//   [user1, secretKey1],
//   [user2, secretKey2],
// ]);

// console.log(secretKeyMap2);

// const key2 = secretKeyMap2.get(user1);
// console.log(key2);

// Easy to know length

const user = new Map([
  ['fName', 'john'],
  ['verified', true],
]);

console.log(user.size);
