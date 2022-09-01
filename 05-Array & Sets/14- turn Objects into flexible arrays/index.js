// const obj = { one: 1, two: 2 };

// for (const key in obj) {
//   console.log('key', obj[key]);
// }

// Object.keys(), Object.values(), Object.entries()

// array of keys
// const user = {
//   fName: 'john',
//   age: 23,
// };

// console.log(Object.keys(user).includes('age'));

// const values = Object.keys(user).map((key) => user[key]);

// console.log(values);

// const values2 = Object.values(user);
// console.log(values2);

// const monthlyExpenses = {
//   food: 400,
//   rent: 1700,
//   insurance: 550,
//   internet: 49,
//   phone: 95,
// };

// const totalExpenses = Object.values(monthlyExpenses).reduce((sum, num) => {
//   return sum + num;
// }, 0);
// console.log(totalExpenses);

// Object.entries() iterate over BOTH key && value

const user = {
  fName: 'john',
  age: 23,
};

// console.log(Object.entries(user));

const users = {
  2345234: {
    name: 'John',
    age: 29,
  },
  8798129: {
    name: 'Jane',
    age: 42,
  },
  1092384: {
    name: 'Fred',
    age: 17,
  },
};

const isOlderThen20 = Object.entries(users).reduce((acc, [id, user]) => {
  // if (user.age > 20) {
  //   acc.push({ ...user, id });
  // }
  // return acc;
  user.age > 20 ? acc.push({ ...user, id }) : [user, id];
  return acc;
}, []);

console.log(isOlderThen20);
