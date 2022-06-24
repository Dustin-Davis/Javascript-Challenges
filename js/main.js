// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
// For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
// For the test cases, the range will be between 1 and 18 and the input will always be an integer.
function FirstFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(FirstFactorial());

// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
// For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
function FirstReverse(str) {
  return str.split("").reverse().join("");
}
console.log(FirstReverse());
