//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//Example
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//The returned format must be correct in order to complete this challenge.
//Don't forget the space after the closing parentheses!
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createNumber(digits) {
  for (let i = 0; i < digits.length; i++) {
    const firstThree = digits.splice(0, 3).join("");
    const secondThree = digits.splice(0, 3).join("");
    const lastThree = digits.splice(0, 3).join("");
    return "(" + firstThree + ")" + " " + secondThree + "-" + lastThree;
  }
}
console.log(createNumber(numbers));

//fizzBuzz

function fizzBuzz(nums) {
  let array = [];
  let count = 0;
  for (let i = 0; i < nums; i++) {
    if (count % 3 === 0 && count % 5 === 0) {
      array.push("fizzBuzz");
    } else if (count % 5 === 0) {
      array.push("fizz");
    } else if (count % 3 === 0) {
      array.push("buzz");
    } else {
      array.push(count);
    }
    count++;
  }
  console.log(array);
}
fizzBuzz(100);

//This code does not execute properly. Try to figure out why.

function multiply(a, b) {
  return console.log(a * b);
}
multiply(2, 5);
///////////// /////////

//You will be given an array of numbers. You have to sort the odd numbers in ascending
//order while leaving the even numbers at their original positions.

//Example
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
let array = [5, 3, 1, 8, 0];
let oddNums = [];
function sortNumbers() {
  array
    .filter((v, i) => v % 2 && oddNums.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => (array[oddNums[i]] = v));
  console.log(array);
}
sortNumbers();

//Solution 2

//const odd = array.filter((x) => x % 2).sort((a, b) => a - b);

//return console.log(array.map((x) => (x % 2 ? odd.shift() : x)));

// const oddNumbers = array.filter((v, i) => v % 2 && oddNums.push(i)); // pushes the odd nombers in the array in descending order //9,7,5,3,1
// console.log(oddNums); // that array here consists of only even numbers // 0,2,4,6,8
// const ascedingOrder = oddNumbers.sort((a, b) => a - b); //turn the oddNumbers array in an ascending order
// const testTwo = ascedingOrder.forEach((v, i) => (array[oddNums[i]] = v));// loops through the odd numbers array, finds index and replaces with the value

// console.log(array);

// ////// //////

//In this kata you are required to, given a string, replace every letter with its position in the alphabet.

//If anything in the text isn't a letter, ignore it and don't return it.

//"a" = 1, "b" = 2, etc.

//Example
//alphabetPosition("The sunset sets at twelve o' clock.")
//Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
let sentence = "thisisajoke";
function alphabetPosition() {
  let test = sentence.split("");
  const array = test.sort();

  for (let i = 0; i < array.length; i++) {
    console.log(array[i].charCodeAt() - 97);
  }
}
alphabetPosition();

////////////////////////////

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

//[10, 343445353, 3453445, 3453545353453] should return 3453455.
const numberSum = [4, 5, 1, 9, 7, 8, 11];
function sumNumbers() {
  numberSum.sort((a, b) => {
    return a - b;
  });
  return numberSum[0] + numberSum[1];
}

sumNumbers();

////////////////////////////

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:

//Sam Harris => S.H

let name = "Andy Kelmend";

function nameInitials(name) {
  const initials = name.match(/\b\w/g);
  return initials.join(".");
}
console.log(nameInitials(name));

////////////////////////////////

//An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//Implement a function that determines whether a string that contains only letters is an isogram.
//Assume the empty string is an isogram. Ignore letter case.

//"Dermatoglyphics" --> true
//"aba" --> false
//"moOse" --> false (ignore letter casing)
let word = "moOse";
console.log(word.split(""));
function isIsogram(str) {
  return (
    str
      .toLowerCase()
      .split("")
      .filter((item, index, arr) => arr.indexOf(item) == index).length ==
    str.length
  );
}

console.log(isIsogram(word));

let competitors = ["Anna", "Beth", "Cara", "David"];

function displayWinners(name, index, array) {
  let isNextItem = index < array.length - 1 ? true : false;
  console.log(index);
  if (isNextItem) {
    console.log(`The No${index + 1} winner is ${name}.`);
  } else {
    console.log(`Sorry, ${name} is not one of the winners.`);
  }
}

competitors.filter((name, index, array) => displayWinners(name, index, array));

// task is to make a function that can take any non-negative integer as an argument and
//return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.

//Examples:
//Input: 42145 Output: 54421

//Input: 145263 Output: 654321

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
console.log(descendingOrder("342356"));
const test = "45326";

////////////////////////////

//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.

function countVowels(str) {
  const test = [];

  const vowels = str.split("");
  for (let i = 0; i < vowels.length; i++) {
    if (
      vowels[i] !== "a" &&
      vowels[i] !== "o" &&
      vowels[i] !== "i" &&
      vowels[i] !== "e" &&
      vowels[i] !== "u"
    ) {
      console.log(test.push(vowels[i]));
    }
  }
  console.log(test.length);
  console.log(vowels.length - test.length);
}
countVowels("o a kak ushakov lil vo kashu kakao");

//solution 2)

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount("my pyx"));

/////////////////////////////

//Make a program that filters a list of strings and returns a list with only
//your friends name in it.

//If a name has exactly 4 letters in it, you can be sure that it has to
//be a friend of yours! Otherwise, you can be sure he's not...

//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

//i.e.

//friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
const friends = ["Ryan", "Kieran", "Mark"];
function findFriends(friends) {
  friends.forEach((friend) => {
    if (friend.length === 4) {
      return friend;
    }
  });
}
findFriends(friends);

// solution 2)

function findFrnds() {
  return friends.filter((arr) => arr.length === 4);
}
findFrnds();
