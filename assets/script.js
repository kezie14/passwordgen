// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function promptUser() {
  var passwordLength = window.prompt(" Length of Password 8-128 ");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert(" Please enter a number between 8-128 ");
    //promptUser();
    return null
  }

  var hasLowercaseLetters = window.confirm(
    "Do you want to add lowercase characters?"
  );

  var hasUppercaseLetters = window.confirm(
    "Do you want to add uppercase characters?"
  );

  var hasSymbols = window.confirm("Do you want to add symbols?");
  var hasNumbers = window.confirm("Do you want to add numbers?");

  if (!hasLowercaseLetters && !hasUppercaseLetters && !hasSymbols && !hasNumbers) {
    window.alert("Make A Choice!")
    //generatePassword()
  }
  
  var passwordOptions = {
  length:length, 
  hasLowercaseLetters: hasLowercaseLetters,
  hasUppercaseLetters: hasUppercaseLetters,
  hasSymbols: hasSymbols,
  hasNumbers: hasNumbers,

  }
  return passwordOptions

  //return passwordLength;
  //generatePassword()
}

function getRandom(arr){
  var rIndex = Math.floor(Math.random() * arr.length)
  var rElement = arr[rIndex]
  return rElement
}

function generatePassword() { 
  //var newPasswordLength = promptUser();
  var newPasswordOptions = promptUser();
  var choices = [];
  var possibleChoice = [];
  var newPassword = []
  if (newPasswordOptions.hasLowercaseLetters === true) {
    possibleChoice = possibleChoice.concat(lowercase);
    choices.push(getRandom(lowercase));
  }
  if (newPasswordOptions.hasUppercaseLetters === true) {
    possibleChoice = possibleChoice.concat(uppercase);
    choices.push(getRandom(uppercase));
  }
  if (newPasswordOptions.hasSymbols === true) {
    possibleChoice = possibleChoice.concat(symbols);
    choices.push(getRandom(symbols));
    
  }
  if (newPasswordOptions.hasNumbers === true) {
    possibleChoice = possibleChoice.concat(numbers);
    choices.push(getRandom(numbers));
  }


for(var i=0; i < newPasswordOptions.Length; i++) {
  var possibleCharacter = getRandom(possibleChoice)
  newPassword.push(possibleCharacter)
}

for(var i=0; i<choices.length; i++) {
  newPassword[i] = choices[i]
}

return newPassword.join(" ")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
