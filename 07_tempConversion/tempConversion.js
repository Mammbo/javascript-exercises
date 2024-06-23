const convertToCelsius = function(farenheit) {
  // takes the value num and executes formulas and then outputs answer
  celcius = (farenheit - 32) * 5/9
  let result = Math.round(celcius*10) / 10 
  return result 
};

const convertToFahrenheit = function(celcius) {
  farenheit = ( 9/5 * celcius ) + 32 
  let result = Math.round(farenheit*10) / 10

  return result 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
