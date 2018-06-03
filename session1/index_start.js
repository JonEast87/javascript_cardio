// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split('')
    .reverse()
    .join('');
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const reversedString = str.split('').reverse().join('');
  return reversedString === str;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const typeCoercionAndReverse = int.toString().split('').reverse().join('');
  return typeCoercionAndReverse;
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charObject = {};
  const charArray = str.split('');
  let maxChar = '';
  let maxOccurance = 0;

  for (let i = 0; i < charArray.length; i++) {
    if (!(charArray[i] in charObject)) {
      charObject[charArray[i]] = 1;
    } else if (charObject.hasOwnProperty(charArray[i])) {
      charObject[charArray[i]]++;
    }
  }

  for (let key in charObject) {
    if (charObject[key] > maxOccurance) {
      maxOccurance = charObject[key];
      maxChar = key;
    }
  }

  return maxChar;
}




// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let output = "";
  for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += 'FizzBuzz\n';
    } else if (i % 5 === 0) {
      output += 'Buzz\n';
    } else if (i % 3 === 0) {
      output += 'Fizz\n';
    }
  }
  return output;
}



// Call Function
const output = maxCharacter('javascript');

console.log(output);