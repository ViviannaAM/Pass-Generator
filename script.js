// Assignment Code //
var generateBtn = document.querySelector("#generate");
function generatePassword(){

// Accessible Characters //

var uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbersArray = ['0','1','2','3','4','5','6','7','8','9']
var specialArray = ['~','`','!', '"', '#', '$', "'", '%', '&', '(', ')', '*', '+','=',',','-','_','.','.','/',':',';','<','>','?','@','^','[',']','{','}','|'
];

var userArray = [];
var resultArray = [];

// Questions //
var numCharacter = prompt ("Choose how many characters you would like in your password (Make sure it is in between 8 - 128 characters long)")
var uppercases = confirm ("Include uppercase characters?")
var lowercases = confirm ("Include lowercase characters?")
var numbers = confirm ("Include numbers?")
var special = confirm ("Include special characters?")

// Array Conditions //

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);
}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);
}

if (numbers){
  resultArray = resultArray.concat(numbersArray);
}

if (special){
  resultArray = resultArray.concat(specialArray);
}
console.log(resultArray)

for (var i = 0; i < numCharacter; i++) {
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
}

return userArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
