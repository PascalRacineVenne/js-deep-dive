// message = 'hello world';
// property of the global object window

// variable message is added to a global object
// accessed from anywhere

// browser => window
// server => global

// globalThis;

// console.log(globalThis);
// console.log(globalThis.message);
// console.log(message);

// Sloppy mode => default in scripts

// Strict mode => trows more error, prevents pitfall of the language

'use strict';
// message = 'hello world';

// hoisting => access a variable before it's creation.
var age;
console.log(age);
age = 26;
console.log(age);
