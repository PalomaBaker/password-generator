
  // Add a click event listener to the "generate" button
  document.getElementById("generate").addEventListener("click", function() {

    // Prompt the user for the password length
    var passwordLength = prompt("Enter the length of your password (between 8 and 128 characters)");

    // Validate the user's input for the password length
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      passwordLength = prompt("Invalid length. Please enter a number between 8 and 128.");
    }

    // Prompt the user for the character types to include in the password
    var includeLowercase = confirm("Do you want to include lowercase letters?");
    var includeUppercase = confirm("Do you want to include uppercase letters?");
    var includeNumbers = confirm("Do you want to include numbers?");
    var includeSpecialChars = confirm("Do you want to include special characters?");

    // Validate the user's input for at least one character type
    while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
      alert("Please select at least one character type.");
      includeLowercase = confirm("Do you want to include lowercase letters?");
      includeUppercase = confirm("Do you want to include uppercase letters?");
      includeNumbers = confirm("Do you want to include numbers?");
      includeSpecialChars = confirm("Do you want to include special characters?");
    }

    // Define arrays of characters to use for generating the password
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    // Initialize an empty string to store the password
    var password = "";

    // Loop through the selected character types and randomly select characters from the corresponding array
    for (var i = 0; i < passwordLength; i++) {
      if (includeLowercase) {
        password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
      }
      if (includeUppercase) {
        password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
      }
      if (includeNumbers) {
        password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
      }
      if (includeSpecialChars) {
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
      }
    }

   

    // Display the generated password on the page
     document.getElementById("password").innerHTML = password;
  });
