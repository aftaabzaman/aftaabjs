// Declare a variable to store the reversed string.
let reversedStr = '';

// Iterate over the string in reverse order.
for (let i = str.length - 1; i >= 0; i--) {
  // Concatenate the current character to the reversed string.
  reversedStr += str[i];
}

// Check if the original string is equal to the reversed string.
if (str === reversedStr) {
  // The string is a palindrome!
  console.log('The string is a palindrome');
} else {
  // The string is not a palindrome.
  console.log('The string is not a palindrome');
}
