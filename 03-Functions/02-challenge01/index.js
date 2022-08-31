// Challenge: Write a function splitBill() that lets you know how much
// you need to pay to split any bill between you and your friends.
// It should return a message with a number.

// Write your code below:

function financial(num) {
  return Number.parseFloat(num).toFixed(2);
}

function splitBill(amount, numPeople) {
  return `Each person needs to pay ${financial(amount / numPeople)}$}`;
}

// Testing your solution
console.log(splitBill(10, 2));
console.log(splitBill(16, 4));
console.log(splitBill(350, 9));
