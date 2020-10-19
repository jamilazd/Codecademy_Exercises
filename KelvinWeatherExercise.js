//variable for today's forecast in kelvin
const kelvin = (0); 

//new variable for celcius 
let celsius = kelvin - 273; 

//new variable for fahrenheit 
let fahrenheit = celsius * (9/5) + 32; 

//fahrenheit has been rounded down
fahrenheit = Math.floor(fahrenheit); 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); 

let newton = celsius * (33/100); 
newton = Math.floor(newton); 
console.log(`The temperature is ${newton} newton.`);