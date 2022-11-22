var lower = ["qwertyuiopasdfghjklzxcvbnm"];
var upper = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
var nums = ["1234567890"];
var schars = ["!@#$%^&*()"];

function generatePassword() {
  var megaArray = [];
  var passwordLength = prompt("How long do you want your password?");
  if (passwordLength < 8) {
    confirm("Length must be at least 8");
    return console.error("Length must be at least 8");
  } else if (passwordLength > 128) {
    confirm("Length must be less then 129");
    return console.error("Length must be less then 129");
  }
  var passwordUppercase = confirm("Do you want upper case?");
  var passwordLowercase = confirm("Do you want lower case?");
  var passwordNumbers = confirm("Do you want numbers?");
  var passwordSchars = confirm("Do you want special characters?");

  if (passwordUppercase) {
    megaArray = megaArray + upper;
  }
  
  if (passwordLowercase) {
    megaArray = megaArray + lower;
  }
  
  if (passwordNumbers) {
    megaArray = megaArray + nums;
  }
  
  if (passwordSchars) {
    megaArray = megaArray + schars;
  }
  if (!passwordUppercase && !passwordLowercase && !passwordNumbers && !passwordSchars){
    alert("Please provide atleast one value")
 var password = "";
 return password;
  }

 
  else {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter =
      megaArray[Math.floor(Math.random() * megaArray.length)];
    // console.log(randomCharacter)
    password += randomCharacter;
    console.log(password);
  }

  return password;
  }}

// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
