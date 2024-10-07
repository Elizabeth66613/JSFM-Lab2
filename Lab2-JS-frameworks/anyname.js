
//First function to output the sentence 
export function favs(favColor, favCoffee) {
  console.log("My favorite color is " +favColor + " and my favorite coffee is " +favCoffee);
}

//Second function to convert joules to kilojoules
export const conv = (joules) => {
  let kilojoules = joules / 1000;
  return kilojoules;
}

//Third function to return the result of math operation
export function math(x, y) {
  let z = (x-y)*2;
  return z;
}

//Forth function to return book name/movie name/series name
export function bmc (key) {
  if (key == "book") return "451 degrees Fahrenheit";
  else if (key == "movie") return "Interstate 60";
  else return "How to get away with murder";
}