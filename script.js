var generateBtn = document.querySelector("#generate");

// Created variables for the password criteria
// var randomNumber = Math.floor(Math.random() * 10) + 1;
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var numbers = "0123456789";


function questions() {
    var passwordLength = prompt("How many characters would you like your password to contain?");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters");
        return;
    }
    var upperCase = confirm("Click OK to confirm including uppercase characters");
    var lowerCase = confirm("Click OK to confirm including lowercase characters");
    var specialChar = confirm("Click OK to confirm including special characters");
    // var randomNumber = confirm("Click OK to confirm including numbers");
    var numbers = confirm("Click OK to confirm including numbers")
    if (upperCase === false && lowerCase === false && specialChar === false && randomNumber === false) {
        alert("You must choose at least one parameter");
        return;
    }
    var passwordOptions = {
        passwordLength: passwordLength,
        upperCase: upperCase,
        lowerCase: lowerCase,
        specialChar: specialChar,
        // randomNumber: randomNumber,
        numbers: numbers
    }
    return passwordOptions;
}
// This function joins all the user responses and then creates the result - a strong password.
function generatePassword() {
    var options = questions();
    var result = [];
    var completedPassword = "";

    if (options.upperCase) {
        for (var i = 0; i < upperCase.length; i++) {
            result.push(upperCase[i]);
        }

        if (options.lowerCase) {
            for (var i = 0; i < lowerCase.length; i++) {
                result.push(lowerCase[i]);
            }
        }

        if (options.specialChar) {
            for (var i = 0; i < specialChar.length; i++) {
                result.push(specialChar[i]);
            }
        }

        // if (options.randomNumber) {
        //     for (var i = 0; i < randomNumber.length; i++) {
        //         result.push(randomNumber[i]);
        //     }

        if (options.numbers) {
            for (var i = 0; i < numbers.length; i++) {
                result.push(numbers[i]);
            }
        }

        }
        console.log(result);
        for (var i = 0; i < options.passwordLength; i++) {
            completedPassword += result[Math.floor(Math.random() * result.length)];
        }
        console.log(completedPassword);
        return completedPassword;
    }

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








