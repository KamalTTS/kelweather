const kelvin = 293;
// The value saved to kelvin will stay constant
let celsius;
celsius = kelvin - 273;
//Converting Kelvin to Celsius
let fahrenheit;
fahrenheit = celsius * (9/5) + 32;
//Writing an equation to calcualate the Fahrenheit
fahrenheit = Math.floor(fahrenheit);
//Rounding the Fahrenheit value to the nearest whole number
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
let newton;
newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(newton);
