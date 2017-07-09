/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
/* jshint browser: true */
/* jshint mocha: true */
'use strict';

// =============================================================================
// PART 1
// =============================================================================
function difference(num1, num2) {
  return num1 - num2;
}

// =============================================================================
function product(num1, num2) {
  return num1 * num2;
}

// =============================================================================
function printDay(num) {
  let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                  'Friday', 'Saturday'];

  return weekdays[num - 1];
}

printDay(1);

// =============================================================================
function lastElement(array) {
  return array[array.length - 1];
}

lastElement([1,2,3,4]); // 4
lastElement([]); // undefined

// =============================================================================
function numberCompare(num1, num2) {
  if (num1 > num2) return 'First is greater.';
  else if (num2 > num1) return 'Second is greater.';
  else return 'Numbers are equal';
}

numberCompare(1,1); // "Numbers are equal"
numberCompare(2,1); // "First is greater"
numberCompare(1,2); // "Second is greater"

// =============================================================================
function singleLetterCount(string, letter) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letter.toLowerCase()) count++;
  }

  return count;
}

singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2

// =============================================================================
// PART 2
// =============================================================================
function multipleLetterCount(string) {
  let counts = {};

  for (let i = 0; i < string.length; i++) {
    if (counts[string[i]]) counts[string[i]]++;
    else counts[string[i]] = 1;
  }

  return counts;
}

multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

// =============================================================================
function arrayManipulation(array, command, location, value) {
  if (command === 'remove') {
    if (location === 'end') return array.pop();
    else if (location === 'beginning') return array.shift();
    else return 'Invalid location';

  } else if (command === 'add') {
    if (location === 'beginning') {
      array.unshift(value);
      return array;
    } else if (location === 'end') {
      array.push(value);
      return array;
    }
  } else return 'Invalid command';
}

arrayManipulation([1,2,3], "remove", "end"); // 3
arrayManipulation([1,2,3], "remove", "beginning"); // 1
arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]

// =============================================================================
function isPalindrome (string) {
  let array = string.split(' ');
  let candidate = array.join('').toLowerCase();
  let length = candidate.length;

  for (let i = 0; i < length / 2; i++) {
    console.log(candidate[i], candidate[length - i - 1]);
    if (candidate[i] !== candidate[length - i - 1]) return false;
  }

  return true;
}

isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome('hannah'); // true
isPalindrome('robert'); // false

isPalindrome('a man a plan a canal Panama');

// =============================================================================
// PART 3
// =============================================================================

// main
function rps() {
  let playerChoice = prompt('rock, paper, or scissors?');
  let compuChoice = getCompuChoice();

  let winner = getWinner(playerChoice, compuChoice);
  alert('The winner is: ' + winner + '! Computer picked: ' + compuChoice);
}

// gets the computer's choice
function getCompuChoice() {
  let choice = '';
  let num = Math.random();

  if (num < 0.34) choice = 'rock';
  else if (num < 0.67) choice = 'paper';
  else choice = 'scissors';

  return choice;
}

// determines the outcome
function getWinner(playerChoice, compuChoice) {
  if (playerChoice === compuChoice) return "it's a tie";
  if (playerChoice === 'paper' && compuChoice === 'rock') return 'player';
  if (playerChoice === 'scissors' && compuChoice === 'paper') return 'player';
  if (playerChoice === 'rock' && compuChoice === 'scissors') return 'player';

  return 'computer';
}

rps();
















// end
