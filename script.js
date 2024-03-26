// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

/* 
Input:
N = 5
A[] = {1,2,3,5}
Output: 4
 */

function findMissingNumber(arr, n) {
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}

console.log(findMissingNumber([6, 1, 2, 8, 3, 4, 7, 10, 5], 9));

function findMissingNumber2(arr, n) {
  // Calculate the sum of numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the sum of numbers in the array
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);

  // The difference between the expected sum and the actual sum
  // will be the missing number
  return expectedSum - actualSum;
}

console.log(findMissingNumber2([6, 1, 2, 8, 3, 4, 7, 10, 5], 10));

// Given an array a of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array. Return the answer in ascending order. If no such element is found, return list containing [-1].

/* 
Input:
N = 5
a[] = {2,3,1,2,3}
Output: 
2 3 
Explanation: 
2 and 3 occur more than once in the given array.
 */

function duplicates(a, n) {
  let duplits = []
  const obj = a.reduce((acc, curr) => {
    acc[curr] = (acc[curr] + 1) || 1
    return acc;
  },{})
  
  for(let key in obj){
    if(obj[key] > 1){
      duplits.push(key)
    }
  }
  return [duplits];
}
console.log(duplicates([2, 3, 1, 2, 3], 5));
