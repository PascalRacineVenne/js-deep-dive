/*

this: reference to an Object.

4 Rules to 'this'. How is it called?

1) in the global context (global object, undefined in strict mode)
2) as a method on an object (object on left side of dot)
3) as a constructor function or class constructor (the instance itself with new)
4) as a DOM event handler (the element itself)

*/

// ********************************

// 1) in the global context

// console.log(this);
// // window

// function whatIsThis() {
//   console.log(this);
// }
// // window

// // IN STRICT MODE => return undefined
// // Why is it an improvment ? You can easily mutate the object
// // Data leaks out of the scope of the function

// function whatIsThisStrict() {
//   'use strict';
//   console.log(this);
// }

// ********************************

// 2) as a method on an object

// const user = {
//   first: 'Reed',
//   last: 'Barger',
//   greetUser() {
//     console.log(`Hi ${this.first} ${this.last}`);
//   },
// };

// user.greetUser();

// const userInfo = {
//   title: 'Programmer',
//   user: {
//     first: 'Reed',
//     last: 'Barger',
//     greetUser() {
//       console.log(`Hi ${this.first} ${this.last}`);
//     },
//   },
// };

// userInfo.user.greetUser();

// ********************************

// 3) as a constructor function or class constructor

// class User {
//   constructor(first, age) {
//     (this.first = first), (this.age = age);
//   }

//   getAge() {
//     console.log(`${this.first} age is ${this.age}`);
//   }
// }

// const user = new User('Pascal', 43);
// user.getAge();

// function User(first, age) {
//   this.first = first;
//   this.age = age;
// }

// User.prototype.getAge = function () {
//   console.log(`${this.first}'s age is ${this.age}`);
// };

// const user2 = new User('Mayline', 40);
// user2.getAge();

// ********************************

// 4) as a DOM event handler

// const button = document.createElement('button');
// button.textContent = 'Click';
// document.body.appendChild(button);

// button.addEventListener('click', function () {
//   console.log(this);
// });

// the button element in the DOM

// 5) call(), apply(), bind()

// const user = {
//   name: 'Reed',
//   title: 'Programmer',
// };

// function printUser() {
//   console.log(`${this.name} is a ${this.title}`);
// }

// printUser.call(user);
// printUser.apply(user);
// Dynamically set THIS context

// function whatIsThis() {
//   console.log(this);
// }

// whatIsThis.call({ first: 'Reed' });
// whatIsThis.apply({ first: 'Reed' });

// function printBio(city, country) {
//   console.log(`${this.name} is a ${this.title} in ${city}, ${country}`);
// }

// printBio.call(user, 'london', 'england');
// printBio.apply(user, ['london', 'england']);

// ************ BIND() ************

// function printUser() {
//   console.log(`${this.name} is a ${this.title}`);
// }

// const userDescription = printUser.bind(user);
// // generates a function
// userDescription();

// 6) Arrow function don't have their own this binding

const user = {
  first: 'Bob',
  fn() {
    console.log(this.first);
  },
  arrowFn: () => {
    console.log(this.first);
  },
};

user.fn(); // Bob
user.arrowFn(); // undefined
