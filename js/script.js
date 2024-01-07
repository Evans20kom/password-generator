// Array of special characters to be included in password
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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

// Array of uppercase characters to be included in password
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

// Function to receive prompt from user for password options and assign prompt to "charactersToUse" Array.
function getPasswordOptions() {
  var generateToggleArray = document.querySelector('#generate'); //https://www.w3schools.com/jsref/obj_window.asp
  
  
  generateToggleArray.addEventListener('click', (e) => {
    e.preventDefault();
  
    let charactersToUse = [];
    document.querySelectorAll('[type="checkbox"]').forEach(toggle => {
      if (toggle.checked === true) {
        charactersToUse.push(toggle.value);
      }
      
    })
     console.log(charactersToUse);
  })
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//test for toggle buttons
//approaches on how to read html elements in javascript sourced from: https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox and https://www.javatpoint.com/how-to-get-all-checked-checkbox-value-in-javascript.
//Approach not performing as expected. Switch to different approach below
// var toggleLowerCase = document.getElementById("lowerCase").value;
// console.log(toggleLowerCase)

// if (toggleLowerCase == "off") {
//   console.log("Lower Case is off")
// } else if (toggleLowerCase == "on") {
//   console.log("Lower Case is on")
// } else {
//   console.log("Error")
// }



//Test for toggles approach 2 sourced from: https://www.youtube.com/watch?v=TjpL8U_vxOo
//Further reading found here: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector ; 
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault ;
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// var generateBtn = document.querySelector('#generate'); //https://www.w3schools.com/jsref/obj_window.asp


// generateBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   let charactersToUse = [];
//   document.querySelectorAll('[type="checkbox"]').forEach(toggle => {
//     if (toggle.checked === true) {
//       charactersToUse.push(toggle.value);
//     }
    
//   });
//    console.log(charactersToUse);

// })


//Test concluded here: approach successfully stores toggle values in array.

