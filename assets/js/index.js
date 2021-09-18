// Write the algorithm for creating the password generator:

// Create arrays to be included in password generation including arrays for: special characters, numeric characters, lowercase characters, uppercase characters

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

let lowerCaseChars = [
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

let upperCaseChars = [
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

// Create a variable to store the length of the password from the user input

// Create a conditional statement to check if password length is a number; If it evaluates as false, return an alert for the user to provide a number

// Create a conditional statement to check if the password length is at least 8 characters long; If it evaluates as false, return an alert for the user to enter a password length of at least 8 characters

// Create a conditional statement to check if the password length is less than 128 characters long. If it evaluates as false, return an alert for the user to enter a password length of less than 128 characters long

// Create a variable to store a boolean to include lowercase characters

// Create a variable to store a boolean to include uppercase characters

// Create a conditional statement to check if the user does not include any types of characters. Alert the user that at least one character type must be selected

// Create an object to store the user inputs

// Create a function for selecting a random element from an array

// Create a function to generate the password that includes the user input; create a variable to store the password as it is being concatenated

// Create an array to store types of characters included in the password

// Create an array to contain one of each type of chosen character to ensure each will be used

// Create a conditional statement that adds an array of special characters into and array of possible characters based on user input; push new random special character to the array of chosen characters

// Create a for loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable

// Add at least one of each guaranteed character in the result

// Transform the result into a string and pass into writePassword

// Get references to the #generate element

// Write password to the #password input