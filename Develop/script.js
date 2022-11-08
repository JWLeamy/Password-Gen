// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* Psuedo-code for writepassword function
1. Prompt the user with questions regarding their password
- How many characters (between 8 and 128)
- Whether or not the user wants to include special characters
- Whether or not the user wants numeric characters
- Whether or not the user wants numeric characters
- Whether or not the user wants numeric characters
*/
