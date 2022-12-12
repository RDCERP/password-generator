

// Created variables for the password criteria
var randomNumber = Math.floor(Math.random() * 10) + 1;
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";


function questions() {
    var passwordLength = prompt("How many characters would you like your password to contain?");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters");
        return;
    }
    var upperCase = confirm("Click OK to confirm including uppercase characters");
    var lowerCase = confirm("Click OK to confirm including lowercase characters");
    var specialChar = confirm("Click OK to confirm including special characters");
    var randomNumber = confirm("Click OK to confirm including numbers");
    if (upperCase === false && lowerCase === false && specialChar === false && randomNumber === false) {
        alert("You must choose at least one parameter");
        return;
    }
    var passwordOptions = {
        passwordLength: passwordLength,
        upperCase: upperCase,
        lowerCase: lowerCase,
        specialChar: specialChar,
        randomNumber: randomNumber
    }
    return passwordOptions;
}
// This function joins all the user responses and then creates the result - a strong password.
function generatePassword() {
    var options = questions();
    var result = [];
    var finalPassword = "";

    if (options.upperCase) {
        possibleCharacters = possibleCharacters.concat(upperCase);
        guaranteedCharacters.push(getRandom(upperCase));
    }

    if (options.lowerCase) {
        possibleCharacters = possibleCharacters.concat(lowerCase);
        guaranteedCharacters.push(getRandom(lowerCase));
    }

    if (options.specialChar) {
        possibleCharacters = possibleCharacters.concat(specialChar);
        guaranteedCharacters.push(getRandom(specialChar));
    }

    if (options.randomNumber) {
        possibleCharacters = possibleCharacters.concat(randomNumber);
        guaranteedCharacters.push(getRandom(randomNumber));
    }

    for (var i = 0; i < options.passwordLength; i++) {
        var possibleCharacter = getRandom(possibleCharacters);

        result.push(possibleCharacter);
    }

    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    }

    return result.join('');
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








