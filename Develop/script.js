// Assignment code here

//set var arrays for specific criteria
var specialchar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", '/', "|", ":", ";", "'", '"', "<", ",", ">", ".", "?", "/"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function randomchoice(max) {
  return Math.floor(Math.random()*max);
}

console.log(specialchar.length) // = 32
console.log(uppercase.length) // = 26
console.log(lowercase.length) // = 26
console.log(number.length) // = 10

var randomspecial = specialchar[randomchoice(32)]
var randomupper = uppercase[randomchoice(26)]
var randomlower = lowercase[randomchoice(26)]
var randomnumber = number[randomchoice(10)]

//based of the preference of the user, I should combine these arrays to make one large array of numbers/uppercase/lowercase/spcial character to choose from. 
//make a condition to ensure the user actually types a password

function generatePassword(){
  plength = prompt("How many characters would you like you password to be? (Between 8 and 128)") 
  //make a condition to ensure the user actually types a password
  i = parseInt(plength)
  
  if (i < 7 || i > 128) {
    window.alert("Your new password must be between 8 and 128 characters")
    generatePassword()
  } else {
    special = confirm("Would you like your password to contain special characters?")
    upper = confirm("Would you like your password to contain upper case letters?")
    lower = confirm("Would you like your password to contain lower case letters?")
    number = confirm("Would you like youur password to contain numbers?")
  }
  
}

generatePassword()

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

-use array of lower case, upper case, and characters, etc

NOTE: use if else statements and boolean values to establish what type of password they want to generate
*/

/*combined arrays based off user preference
var su = specialchar.concat(uppercase)
var sl = specialchar.concat(lowercase)
var sn = specialchar.concat(number)
var ul = uppercase.concat(lowercase)
var un = uppercase.concat(number)
var ln = lowercase.concat(number)
var sul = su.concat(lowercase)
var sun = su.concat(number)
var sln = sl.concat(number)
var uln = ul.concat(number)
*/
