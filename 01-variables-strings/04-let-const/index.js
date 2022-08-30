// let && const
// not hoisted

console.log(age);

// Temporal dead zone...

// let age;
// const age;

// even value is going to change => let

let age;
age = 43;
age = 54;

// Need an initial value => const
// constant, cannot be reinitialized

const age2 = 26;
