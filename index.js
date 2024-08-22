function isPalindrome(word) {
 
  const pal = word.length; 
  for (let i = 0; i < pal ; i++) {
    if (word[i] !== word[pal - 1 - i]) {
      return false; 
    }
  }
  return true;
}


// create a variable. Pal. short for Palindrome.
// make the variable equal to the length of the potential 
// word. Use a for loop to iterate through the word. The 
// iteration will only need to go through half of the word. If
// the iteration returns false then it is not a palindrome.

/*
  I want to loop through the array (word) to find that the characters
  that need to match in order to create a palindrome, do. A pelindrome
  must be made up of an odd number of letters. The loop must reach the
  middle letter and then know to stop looping. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
