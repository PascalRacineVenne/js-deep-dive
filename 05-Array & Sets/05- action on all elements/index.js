const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

// const newTemperatures = temperatures.map((temperature) => {
//   temperature.isHigh = true;
//   return temperature;
// });

// console.log(newTemperatures);

// update property conditionally

const newTemps = temperatures.map((temperature) =>
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
);
console.log('new temps');
console.log(newTemps);

// *** forEach *** iterator

// newTemps.forEach((temp) => {
//   if (temp.isHigh) {
//     console.log(`Temperature ${temp.degrees} was a record high last week`);
//   }
// });

// We can also chain the methods
const newTemps2 = temperatures
  .map((temperature) =>
    temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
  )
  .forEach((temp) => {
    if (temp.isHigh) {
      console.log(`Temperature ${temp.degrees} was a record high last week`);
    }
  });
