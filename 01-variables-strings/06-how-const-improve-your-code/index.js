// const allows you to do the least
// restriction are good
// make code more readable

// must be intialize with a value
// can't be reassigned after ward

// const age = 26;
// age = 36;
// type error assigment to constant variable

// example 1
const originalPrice = 50;
const percentOff = 20;
const salePrice = originalPrice * (percentOff / 100);

// rest of our program (maybe 100s of lines)

console.log(salePrice);

// example 2
var originalPrice2 = 50;
var percentOff2 = 20;
var salePrice2 = originalPrice2 * (percentOff2 / 100);

// rest of our program (maybe 100s of lines)

console.log(salePrice2);
