// Assignment code here

//set var arrays for specific criteria
var specialchar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", '/', "|", ":", ";", "'", '"', "<", ",", ">", ".", "?", "/"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//random number generator that can be applied to all arrays
function randomchoice(max) {
  return Math.floor(Math.random()*max);
}

//Use the random generator to retrieve a randomly selected value from the chosen array (applied later within 'while loop' on lines 49-52)
var randomspecial = specialchar[randomchoice(specialchar.length)]
var randomupper = uppercase[randomchoice(uppercase.length)]
var randomlower = lowercase[randomchoice(lowercase.length)]
var randomnumber = number[randomchoice(number.length)]


function generatePassword(){
  plength = prompt("How many characters would you like you password to be? (Between 8 and 128)") 
  //make a condition to ensure the user actually types a number between 8 and 128
  i = parseInt(plength)
  
  if (i < 7 || i > 128) {
    window.alert("Your new password must be between 8 and 128 characters")
    generatePassword()
  } 
  if (!Number.isInteger(i)) {
    window.alert("Please enter a valid number")
    generatePassword()
  }
    ifspecial = confirm("Would you like your password to contain special characters?")
    ifupper = confirm("Would you like your password to contain upper case letters?")
    iflower = confirm("Would you like your password to contain lower case letters?")
    ifnumber = confirm("Would you like your password to contain numbers?")

    // setting a minimum number for the specified characters
    
    var characters = 0;
    var newpass = []

    while(characters < i){

      var randomspecial = specialchar[randomchoice(specialchar.length)]
      var randomupper = uppercase[randomchoice(uppercase.length)]
      var randomlower = lowercase[randomchoice(lowercase.length)]
      var randomnumber = number[randomchoice(number.length)]

    if(ifspecial){
      newpass.push(randomspecial);
      characters++;
    }
    if (ifupper) {
      newpass.push(randomupper);
      characters++;
    }
    if (iflower) {
      newpass.push(randomlower);
      characters++;
    }
    if (ifnumber) {
      newpass.push(randomnumber);
      characters++;
    }}

    newpass = newpass.join("")
    return newpass
  
  }
  
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
