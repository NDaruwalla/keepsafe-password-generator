// Write the algorithm for creating the password generator:

// Create arrays to be included in password generation including arrays for: special characters, numeric characters, lowercase characters, uppercase characters


// import {getOptions} from './prompt'



let specialChars = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.' 
];

let numericChars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];

let lowercaseChars = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

let uppercaseChars = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Then create function that will prompt the user for password options
function getOptions () {
    // Create a variable to store the length of the password from the user input
    let length = parseInt(
        prompt('How many characters would you like in your password?')
    );

 

// Create a conditional statement to check if password length is a number; If it evaluates as false, return an alert for the user to provide a number
if (isNaN(length) === true) {
    alert('You must enter a number for the password length.');
    return;
}

// Create a conditional statement to check if the password length is at least 8 characters long; If it evaluates as false, return an alert for the user to enter a password length of at least 8 characters
if (length < 8) {
    alert('The password length must be 8 or more characters.');
    return;
}
// Create a conditional statement to check if the password length is less than 128 characters long. If it evaluates as false, return an alert for the user to enter a password length of less than 128 characters long

if (length > 128) {
    alert('The password must be no more than 128 characters.')
    return;
}

// Create a variable to store a boolean to include lowercase characters
let hasSpecialChars = confirm (
    'Would you like to include SPECIAL characters? (If yes, click ok.)'
);

let hasNumericChars = confirm (
    'Would you like to include NUMERIC characters? (If yes, click ok.)'
);

// Create a variable to store a boolean to include lowercase characters
let hasLowercaseChars = confirm (
    'Would you like to include LOWERCASE characters? (If yes, click ok.)'
);

// Create a variable to store a boolean to include uppercase characters
let hasUppercaseChars = confirm (
    'Would you like to include UPPERCASE characters? (If yes, click ok.)'
);

// Create a conditional statement to check if the user does not include any types of characters. Alert the user that at least one character type must be selected
if (
    hasSpecialChars === false &&
    hasNumericChars === false &&
    hasLowercaseChars === false &&
    hasUppercaseChars === false 
) {
    alert('You must select at least ONE character type to generate a password.')
    return;
}

// Create an object to store the user inputs
let userSelections = {
    length: length,
    hasSpecialChars: hasSpecialChars,
    hasNumericChars: hasNumericChars,
    hasLowercaseChars: hasLowercaseChars,
    hasUppercaseChars: hasUppercaseChars
};

return userSelections;
}

// Create a function for selecting a random characters from an array
function getRandomChar(array) {
    let randomIndex = Math.floor(math.random() * array.length);
    let randomChar = array[randomIndex];

    return randomChar;
}

// Create a function to generate the password that includes the user input; create a variable to store the password as it is being concatenated
function generatePassword {

   
    let options = getOptions();

    let result = [];

     // Create an array to store types of characters included in the password
    let includedTypeChars = [];

    // Create an array to contain one of each type of chosen character to ensure each will be used
    let mustHaveChars = [];
}

getOptions();


// Create a conditional statement that adds an array of special characters into and array of possible characters based on user input; push new random special character to the array of chosen characters

// Create a for loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable

// Add at least one of each guaranteed character in the result

// Transform the result into a string and pass into writePassword

// Get references to the #generate element

// Write password to the #password input
