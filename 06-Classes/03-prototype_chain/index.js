// prototypical inheritance -
// each instantiated object (from constructor function) inherits from prototype

// every object has prototype

console.log(Object.getPrototypeOf({}).constructor);
// Object

console.log(new Object());
// log {}

function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

const student1 = new Student(1, 'Reed');
console.log(Object.getPrototypeOf(student1).constructor);
// log
// Student(id, name, subjects = []) {
// this.id = id;
// this.name = name;
// this.subjects = subjects;
// }

console.log(student1.__proto__);
// {constructor: ƒ}
// constructor: ƒ Student(id, name, subjects = [])
// [[Prototype]]: Object

console.log(student1.__proto__ === Student.prototype);

console.log(student1.__proto__.__proto__ === Object.prototype);
// That's the end of the line.
