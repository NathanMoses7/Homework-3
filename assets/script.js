// Assignment Code
var generateBtn = document.querySelector("#generate");

//This function gets the password
function getPassword(){

  //password variables
  var randomKey = ""
  var numbers = "0123456789"
  var symbols = "!@#$%^&*()"
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var multiSelect = "";

  //First prompt selected lets user select password length
  var keyLength = prompt("Your password should be between 8 and 128 charecters long, enter a number.");

  if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
    alert("Your password does not meet criteria presented. Password has to be between 8 and 128, please enter another number.")
    return;
  } else {
    var lowerEl = confirm("Your password will have lowercase letters,click to continue");
    var upperEl = confirm("Your password will have uppercase letters,click to continue");
    var symbolsEl = confirm("Your password will have symbols,click to continue");
    var numbersEl = confirm("Your password will have numbers,click to continue");
  }

  if (lowerEl) {multiSelect += lowercase; }
  if (upperEl) {multiSelect += uppercase; }
  if (numbersEl) {multiSelect += numbers; }
  if (symbolsEl) {multiSelect += symbols; }

  for (i = 0; i <keyLength; i++){
    randomKey += multiSelect[Math.floor(math.random() * multiSelect.length)]
  }
  return(randomKey);
}

// Write password to the #password input
function writePassword(randomKey) {
  var passwordText = document.querySelector("#password");
  passwordText.value = randomKey;

  if (passwordText.length === 0){
    return;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {writePassword(getPassword())});
