const numbers = [1, 2, 3, 5];

// map() with reduce
const doubledNumbers = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  // always return the accumulator
  return acc;
}, []);
// console.log(doubledNumbers);

// filter() with reduce
// all number greater than 3
const allGreaterThan3 = numbers.reduce((acc, num) => {
  // push or concat.
  num > 3 ? acc.push(num) : acc;
  return acc;
}, []);

// console.log(allGreaterThan3);

// every() with reduce
const evenNumbersPresent = numbers.reduce((acc, num) => {
  // console.log(acc);
  return acc && num % 2 === 0;
}, true);

// console.log(evenNumbersPresent);

// some() with reduce

const atLeastOneEvenNumbers = numbers.reduce((acc, num) => {
  return acc || num % 2 === 0;
}, false);

console.log(atLeastOneEvenNumbers);
