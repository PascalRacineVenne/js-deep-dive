const temperatures = [69, 71, 83, 64];

// console.log(temperatures.indexOf(69));
// // 0
// console.log(temperatures.indexOf(50));
// // -1 : couldn't find the index

// // We want to know if it exists or not
// console.log(temperatures.indexOf(50) > -1);
// // return a boolean

// console.log(temperatures.includes(50));
// // Boolean

const temperatures2 = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

// some() at least one element is true
const result = temperatures2.some((temperature) => temperature.isRecordTemp);
console.log(result);

// every() return boolean true if everything is evaluated as true
const result2 = temperatures2.every((temperature) => !temperature.isRecordTemp);
console.log(result2);

// *** includes() some() every( ) *** //
