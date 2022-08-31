/*
Primitive types:

string
number
boolean
undefined
null
symbol

everything else - Object type
*/

let message = 'hello';
// console.log(typeof message);
// string

// console.log(window);
// object

// 1) explicit type conversion
// console.log(String(42));
// console.log(Boolean(message));

// 2) implicit type conversion coercion
const times = '1' * '2';
// console.log(typeof times);
// number

// console.log('10' + 20);
// return a string

// ***** falsy value

// false
// undefined
// null
// 0
// ''
// NaN

// ***** truthy value

// everything else is true

// 1) Avoid direct comparaison in conditionals
const username = '';
if (!username) {
  console.log('no user');
}

// 2) Use ==== (strict equal operator)
if (null == undefined) {
  console.log('equals');
} else {
  console.log('not euqual');
}

// 3) Convert to real Boolean values where needed

if (Boolean(NaN) === Boolean(NaN)) {
  console.log('equals');
} else {
  console.log('not euqual');
}
