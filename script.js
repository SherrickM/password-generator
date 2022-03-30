var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var usableChar = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var length = window.prompt('Pick a number between 8 - 128)
  console.log(length)
  // WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowerCase = window.confirm('Would you like lowercase characters')
  console.log(lowerCase)
  var upperCase = window.confirm('Would you like uppercase characters')
  console.log(upperCase)
  var special = window.confirm('Would you like special characters')
  console.log(special)
  var numbers = window.confirm('Would you like special numbers')
  console.log(numbers)

  if (lowerCase === true) {
    usableChar = usableChar.concat(lowerCasedCharacters)
    console.log(usableChar)
  }

  if (upperCase === true) {
    usableChar = usableChar.concat(upperCasedCharacters)
    console.log(usableChar)
  }
  if (special === true) {
    usableChar = usableChar.concat(specialCharacters)
    console.log(usableChar)
  }
  if (numbers === true) {
    usableChar = usableChar.concat(numericCharacters)
    console.log(usableChar)
  }
  var password = '';

  for (var i = 0; i < length; i++) {
    password = password + usableChar[Math.floor(Math.random() * usableChar.length)]

  }
  return password;
}



// WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN all prompts are answered THEN a password is generated that matches the selected criteria

generateBtn.addEventListener('click', writePassword);

// GIVEN I need a new, secure password WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria


// WHEN prompted for password criteria THEN I select which criteria to include in the password





// WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected



// WHEN the password is generated THEN the password is either displayed in an alert or written to the page

// Add event listener to generate button











