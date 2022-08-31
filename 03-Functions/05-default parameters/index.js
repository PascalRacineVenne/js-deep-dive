function convertTemperature(celsius, decimalPlaces = 2) {
  // celsius to Fahrenheit
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit.toFixed(decimalPlaces);
}

console.log(convertTemperature(21));
