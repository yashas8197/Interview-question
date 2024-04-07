// Problem Statement: Given an integer N, write a program to count the number of digits in N.
/* 
Input: N = 12345
Output: 5
Explanation: N has 5 digits
*/

function countNumbers(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count += 1;
  }
  return count;
}

console.log(countNumbers(1234599));

function countNumbers2(num) {
  let count = Math.floor(Math.log10(num) + 1);
  return count;
}
console.log(countNumbers2(1234));

// Time Complexity = O(log10(n))
// when ever the division is happening by 10 it is log base 10
// when ever the division is happening by 2 it is log base 2 .....

// Problem Statement: Given a number N reverse the number and print it.

/* 
Example:
Input: N = 123
Output: 321
Explanation: The reverse of 123 is 321
 */

function reverseNumber(num) {
  let reverseNum = 0;
  while (num > 0) {
    reverseNum = reverseNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reverseNum;
}

console.log(reverseNumber(10400));

/* 
Hint: 
For first digit: 1
num = num*10 + 1 = 0*10 + 1 = 1;

For second digit: 2
num = num*10 + 2 = 1*10 + 2 = 12;

For third digit: 3
num = num*10 + 2 = 12*10 + 3 = 123; 
*/

// Problem Statement:  Given a number check if it is a palindrome. An integer is considered a palindrome when it reads the same backward as forward.

/* 
Example 1:
Input: N = 123
Output: Not Palindrome Number
Explanation: 123 read backwards is 321.Since these are two different numbers 123 is not a palindrome. 
*/

function isPalindrom(num) {
  let originalNum = num  
  let reverseNum = 0;
  while (num > 0) {
    reverseNum = reverseNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reverseNum === originalNum ? true : false;
}

console.log(isPalindrom(121));

// Problem Statement: Given a number, check if it is Armstrong Number or Not.
/* 
Example 1:
Input:153 
Output: Yes, it is an Armstrong Number
Explanation: 1^3 + 5^3 + 3^3 = 153

Input:170 
Output: No, it is not an Armstrong Number
Explanation: 1^3 + 7^3 + 0^3 != 170
 */

function isArmstrongNumber(num){
    let checkArmstrong = 0;
    const originalNum = num;
    while(num > 0){
        let cubeNum = (num % 10) ** 3
        num = Math.floor(num / 10)
        checkArmstrong += cubeNum
    }
    return checkArmstrong === originalNum ? true : false
}

console.log(isArmstrongNumber(407))

// Problem Statement: Given a number, print all the divisors of the number. A divisor is a number that gives the remainder as zero when divided.

/*
Example 1:
Input:
 n = 36
Output:
 1 2 3 4 6 9 12 18 36
Explanation:
 All the divisors of 36 are printed.
 */

function printAllDivisor(num){
  for(let i=0; i<=num; i++){
    if(num % i === 0){
      console.log(i)
    }
  }
}

// Time complexsity is O(n)

console.log(printAllDivisor(36))

