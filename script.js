// 1.  write a function that returns the reverse string

function reverseString(str) {
  let reversedString = "";
  for (let i = 0; i < str.length; i++) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;
}

console.log(reverseString("yashas"));

//2. write the function that returns the longest word in the sentence.

function getLongestWord(str) {
  let words = str.split(" ");
  let longestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(getLongestWord("I am yashas"));

// 3. write a function that check weather a given string is a plindrome or not.

function checkPalindrome(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed === str;
}

console.log(checkPalindrome("mam"));

// 4. write a function to remove duplicate elements from an array.

function removeDuplicates(arr) {
  let withoutDup = [];
  arr.map((element) => {
    if (!withoutDup.includes(element)) {
      withoutDup.push(element);
    }
  });
  return withoutDup;
}

console.log(removeDuplicates(["a", "a", "a", "b", "b", "d", "d", "c", "c"]));

// 5. write a function to check if a given number is prime or not

function checkPrimeNum(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if(num % i === 0){
      return false
    }
  }
  return true
}

console.log(checkPrimeNum(11));

// 6. write a program to remove all whitespaces charecter from a string.

function removeWhitespace(str) {
  let withoutSpace = ''
  for(let char of str){
    if(char !== " " && char !== "\t" && char !== "\n"){
      withoutSpace += char
    }
  }
  return withoutSpace;
}


console.log(removeWhitespace("Hello world")); // Expected: "Helloworld"
console.log(removeWhitespace("  How are  you?  ")); // Expected: "Howareyou?"
console.log(removeWhitespace("  Keep\t\t\tcalm\nand\n\tcode\t\t\t")); // Expected: "Keepcalmandcode"

