# Password-Gen

## Description
A personalized password generator that provides a completely randomized password based off specified criteria.

The user not only chooses the length of their new password, but whether or not it contains Uppercase letters, Lowercase letters, Special characters, or Numbers.

## Webpage Picture
![Image of password generator](./Develop/images/pass-gen-photo.png)

## Technologies Used

1. HTML - used to create and structure the given webpage
2. CSS - used to modify the presentation and style of the given webpage
3. Git - used to clone down the original code prior to making modifications
4. Github - used to create this repository, modify and eventually commit each change made, and ultimately deploy the fully edited webpage
5. Javascript - used to generate the password after interacting with the webpage

## Code Snippet Java
```
function generatePassword(){
  plength = prompt("How many characters would you like you password to be? (Between 8 and 128)") 
  //make a condition to ensure the user actually types a number between 8 and 128
  i = parseInt(plength)
  
  if (i < 7 || i > 128) {
    window.alert("Your new password must be between 8 and 128 characters")
    generatePassword()
  } 
  
  else if (!Number.isInteger(i)) {
    window.alert("Please enter a valid number")
    generatePassword()
  }

  else {
    ifspecial = confirm("Would you like your password to contain special characters?")
    ifupper = confirm("Would you like your password to contain upper case letters?")
    iflower = confirm("Would you like your password to contain lower case letters?")
    ifnumber = confirm("Would you like your password to contain numbers?")
  }

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
```