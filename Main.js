// Kelvin Project

const kelvin = 580;
// Forecast for today

var celsius = kelvin - 273;
// To convert Kelvin to celsius you need to subtract 273

var fahrenheit = (celsius * ((9/5) + 32));
// equation to calculate temp in fahrenheit

fahrenheit = Math.floor(fahrenheit);
// function used to round result down to nearest whole number

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
// Code to insert the fahrenhiet variable value into the middle of a string of text.

var newton = (celsius * (33 / 100))
// conversion equation for temperature in Newton's.

newton = Math.floor(newton);
// Used to round result down to closest whole number.

console.log(`The temperature is ${newton} degrees Newton.`);
// Displays string stating temperature in Newton's.

