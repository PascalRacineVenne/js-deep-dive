// Merge data of multiple object

const user = {
  name: '',
  username: '',
  phoneNumber: '',
  email: '',
  password: '',
};

const newUser = {
  username: 'ReedBarger',
  email: 'reed@gmail.com',
  password: 'mypassword',
};

// Object.assign(user, newUser);

// console.log(user);
// Mutates the original user OBJ ===> BAD!

// const updatedUser = Object.assign({}, user, newUser, { verified: false });
// console.log(user);
// console.log(updatedUser);
// console.log(user); // untouched

// NOT INTUITIVE

// Spead operator magic!!
// Order matters

const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);
