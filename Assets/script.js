
  var generateBtn = document.querySelector("#generate");
  
  

 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 



// Function that generates the password
function generatePassword() {
  // variables for the numbers, uppercase, lowercase and special characters
  var numbers = '0123456789';
  var specialCase = '!@#$%^&*()/\[]{}|-_+=?<>,.:;';
  var upperCaseABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseABC = 'abcdefghijklmnopqrstuvwxyz';  
  var randomselect = ['']; // empty array for the different characters
  var passwordselect = ''; // empty array for the different password generated

  // display for the character selection
  var passwordLength = prompt("You must choose between 8 and 128");
  // if else statement for picking characters between 8-128
   if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
       alert("Pick a number between 8 and 128"); // isNan is used to return the characters that are not numbers
   }

       else {    
          
        lowerCasefinal = confirm("Will this contain lower case letters?");
       
        upperCasefinal = confirm("Will this contain upper case letters?");
       
        numbersfinal = confirm("Will this contain numbers?");
        
        specialCasefinal = confirm("Will this contain special characters?");
        
       }
    // Different if else statements for uppercase, lowercase, numbers and special characters
    // if statements are true, the push method is used to push each element into the randomselect array  
    if (upperCasefinal === true) 
    {for (var i = 0; i < upperCaseABC.length; i++) {
      randomselect.push(upperCaseABC[i]);
    }
    console.log(randomselect);}

    if (lowerCasefinal === true)
     {for (var i = 0; i < lowerCaseABC.length; i++) {
      randomselect.push(lowerCaseABC[i]);
    }
    console.log(randomselect);}

    if (numbersfinal === true)
     {for (var i = 0; i < numbers.length; i++) {
      randomselect.push(numbers[i]);
    }
    console.log(randomselect);}

    if (specialCasefinal === true)
     {for (var i = 0; i < specialCase.length; i++) {
      randomselect.push(specialCase[i]);
    }
    console.log(randomselect);}

       
     
      // Proper Random Function for a for loop
      for (i = 0; i < passwordLength; i++) {       
              
         passwordselect += randomselect[Math.floor(Math.random() * randomselect.length)];

       }

         return passwordselect;
      
}









