// var price = 20;
// var isSale = true;

// if (isSale) {
//   // discount price of product
//   var price = 20 - 2;
//   // do something
//   console.log('sale price', price);
// }

// console.log('price', price);

// var live in global scope...
// it ignore the block ... WRONG
// variable shadowing overiding values

const price = 20;
let isSale = true;

if (isSale) {
  // discount price of product
  let price = 20 - 2;
  // const price = 20 - 2;
  // do something
  console.log('sale price', price);
}

console.log('price', price);
