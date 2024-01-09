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
//Obsolete
// //declare all posible combinations of variables above using the concat method.

// //Combinations of two - Lower Case:
// var lowerCaseUpperCase = lowerCasedCharacters.concat(upperCasedCharacters);
// var lowerCaseNumeric = lowerCasedCharacters.concat(numericCharacters);
// var lowerCaseSpecialCharacters = lowerCasedCharacters.concat(specialCharacters);

// //Combinations of two - Upper Case:
// var upperCaseNumeric = upperCasedCharacters.concat(numericCharacters);
// var upperCaseSpecialCharacters = upperCasedCharacters.concat(specialCharacters);

// //Combinations of two - Special Characters:
// var specialCharactersNumeric = specialCharacters.concat(numericCharacters);

// //Combinations of three - Lower Case - Upper Case:
// var lowerUpperNumeric = lowerCaseUpperCase.concat(numericCharacters);
// var lowerUpperSpecial = lowerCaseUpperCase.concat(specialCharacters);

// //combinations of three - Special Characters - Numeric:
// var specialNumericLower = specialCharactersNumeric.concat(lowerCasedCharacters);
// var specialNumericUpper = specialCharactersNumeric.concat(upperCasedCharacters);

// //combination of all four:
// var lowerUpperNumericSpecial = lowerCaseUpperCase.concat(specialCharactersNumeric);

// Function to receive prompt from user for password options and assign prompt to "charactersToUse" Array.
//Rewritten function to identify all possible password character combinations (based on user input) and return them as a single value to be used by the generatePassword function
//Retrospectively, this function can probably be written more efficiently. Due to deadline issues, it will be deployed, and code will be revisited at a later date.
  function getPasswordOptions() {
    let charactersToUse = [];
    let lowerCase = document.querySelector("#lowerCase");
    let upperCase = document.querySelector("#upperCase");
    let numeric = document.querySelector("#numbers");
    let special = document.querySelector("#specialCharacters");
    
    if (lowerCase.checked) {
      if (lowerCase.checked && upperCase.checked) {
        if (lowerCase.checked && upperCase.checked && numeric.checked) {
          if (lowerCase.checked && upperCase.checked && numeric.checked && special.checked) { 
            charactersToUse = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters, specialCharacters);
            } else {charactersToUse = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters);}
          }
          else if (lowerCase.checked && upperCase.checked && special.checked) {
            charactersToUse = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters);
          } else {charactersToUse = lowerCasedCharacters.concat(upperCasedCharacters);}
        } else if(lowerCase.checked && numeric.checked) {
          if(lowerCase.checked && numeric.checked && special.checked) {
            charactersToUse = lowerCasedCharacters.concat(numericCharacters, specialCharacters);
          } else {charactersToUse = lowerCasedCharacters.concat(numericCharacters);}
        }else if (lowerCase.checked && special.checked) {
          charactersToUse = lowerCasedCharacters.concat(specialCharacters);
        } else {charactersToUse = lowerCasedCharacters}
      }
    
    else if (upperCase.checked) {
      if(upperCase.checked && numeric.checked) {
        if(upperCase.checked && numeric.checked && special.checked) {
          charactersToUse = upperCasedCharacters.concat(numericCharacters, specialCharacters);
        } else {charactersToUse = upperCasedCharacters.concat(numericCharacters);}
      } else if (upperCase.checked && special.checked) {
        charactersToUse = upperCasedCharacters.concat(specialCharacters);
      } else {charactersToUse = upperCasedCharacters;}
    }
    
    else if (numeric.checked) {
      if(numeric.checked && special.checked) {
        charactersToUse = numericCharacters.concat(specialCharacters);
      } else {charactersToUse = numericCharacters;}
    } 
    
    else if (special.checked) {
        charactersToUse = specialCharacters;
    } 
    
    else {
      alert("Please, select at least one character type using the toggle buttons below");
      charactersToUse = [""]
  }
    return charactersToUse;
    console.log(charactersToUse);
  }
  

//Function to 
// 1: receive prompt from user for password lenth.
// 2: Test if user input is desirable.
// 3: Prompt user to correct input if undesirable.
// 4: Assign prompt to "passwordLength" variable and return for generate password function (see below).
function getPasswordLength() {
  //User input saved in variable as a string
  var rawUserInput = document.getElementById("characterLength").value;
  //Convert string to number. Approach found here: https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
  var passwordLength = rawUserInput*1;
  if (Number.isInteger(passwordLength)) {
      if (passwordLength>7 && passwordLength<129) {
      console.log(passwordLength);
      return passwordLength;
      } else {alert("Please select a number between 8 and 128")
      } 
  } else {alert("Please select an integer between 8 and 128")
  }
}




//***UNCOMMENT WHEN READY

// // Function for getting a random element from an array
// function getRandom(arr) {

// }

// Function to generate password with user input
function generatePassword() {
  let passwordLength= getPasswordLength(); //Method proposed by Asim Mahar, found here: https://stackoverflow.com/questions/10579713/passing-a-local-variable-from-one-function-to-another
  let charactersToUse = getPasswordOptions(); //Same as above
  let finalPassword = [];
  let randomCharacter = 0;
  for (var characterNumber = 0; characterNumber < passwordLength; characterNumber++) {
    //Random Number Generation Approach found: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    randomCharacter = Math.floor(Math.random() * charactersToUse.length); 
    finalPassword += charactersToUse[randomCharacter];
  }
  console.log(finalPassword)
  return finalPassword;
}

// // Get references to the #generate element
var generateBtn = document.querySelector('#generate'); //https://www.w3schools.com/jsref/obj_window.asp

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

   passwordText.value = password;
 }

// Add event listener to generate button - Starter Code Altered to fit application structure.
generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getPasswordOptions();
  getPasswordLength();
  generatePassword();
  writePassword();
  //writePassword();
});


//*** UNCOMMENT WHEN READY

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

