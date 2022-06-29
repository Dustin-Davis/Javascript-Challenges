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

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

function XO(str) {
  var x = 0,
    o = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x++;
    } else if (str[i].toLowerCase() === "o") {
      o++;
    }
  }
  return x === o;
}

console.log(XO());


// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "("
// if that character appears only once in the original string, or ")"
// if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(str) {
  //create a var to hold string value that IGNORES case
  var word = str.toLowerCase();
  //create a var to hold the finished string to return after it's looped through
  var unique = '';
  //loop through all letters in string
  for (var i = 0; i < word.length; i++) {
    //check for any characters that repeat
    if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
      //for each character that never dupes, place (
      unique += '(';
    } else
      //for each character that IS a dupe, place )
      unique += ')';
  }
  //return the full string value where '(' are non duped and all')' are duped
  return unique;
}
//test by printing this in the console
console.log(duplicateEncode('BaRaban'));
