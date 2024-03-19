// --- Directions
// Write a function that returns the number of vowels used in a string. Vowels are the charecters 'a', 'e', 'i', 'o', 'u'.
// ---Example
// vowels('Hi There!') ---> 3
// vowels('How are you?') ---> 5
// vowels('Coding Money') ---> 4
// vowels('why?') ---> 0

function vowels1(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  let countVowels = 0;
  let strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (strArray[i] === vowel[j]) {
        ++countVowels;
      }
    }
  }
  return countVowels;
}

console.log(vowels1("How are you?"));

function vowels2(str) {
  let strArray = str.toLowerCase().split("");

  const filterVowelChar = strArray.filter(
    (char) => char.includes("a") || char.includes("e") || char.includes('i') || char.includes('o') || char.includes('u')  
  );
  return filterVowelChar.length;
}

console.log(vowels2('I am yashas'));

function vowels3(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  let countVowels = 0;
  let strArray = str.toLowerCase().split("");

  const filterVowelChar = strArray.filter(
    (char) => vowel.includes(char)  
  );
  return filterVowelChar.length;
}

console.log(vowels3('I am yashas'));

function vowels4(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  let strArray = str.toLowerCase().split("");

  for(let char of strArray){
    if(vowel.includes(char)) count++
  }
  return count
}

console.log(vowels4('I am yashas'));
