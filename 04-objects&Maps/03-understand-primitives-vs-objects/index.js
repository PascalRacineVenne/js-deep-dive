// Object manage collection of primitives

//  6 primitives

// undefined, null, boolean, number, string, symbol

// ********** primitive - passed by value

//  ********* object - passed by reference

// const num = 'hello world';
// const anotherNum = 'hello world';
// console.log(num === anotherNum); TRUE

// const obj = {};
// const anotherObj = {};
// console.log(obj === anotherObj); //false

// We can dynamically change the inner gut on it.
// Different property and totally unique value.

const obj = {};
const anotherObj = obj;
anotherObj.a = 1;

console.log(obj);
console.log(anotherObj);

// The same since it's a reference.
