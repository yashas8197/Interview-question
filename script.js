//freeCodeCamp

// --Directions
// Given a String, return true is the string is a plindrome or false if it is not. palindroms are strins that form the same word if it is revered

// --Example
// palindrome("kayak") === true
// palindrome("madam") === true

function palindrom1(word){
    let reversed = ''
    for(let char of word){
        reversed = char + reversed
    }
    return reversed === word 
}
console.log(palindrom1('madam'))

function palindrom2(word){
    const reversed = word.split('').reverse().join('')
    return reversed === word ? true : false
}

console.log(palindrom2("madam"))

// Using every method
function isPalindrome(word) {
    return word.split('').every((char, index) => {
        // Compare the character at the current index with its counterpart from the end
        return char === word[word.length - index - 1];
    });
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false