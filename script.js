// RoadSideCoder - array
// Ques 1 - Second Largest number
// Given an array of size N, print second largest distinct element from array

// Input: [12,35,1,10,34,1] --> output: 34
// Input: [10, 5, 10] --> output: 5

function secondLargestNum(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {  // Time Complextity: o(n) 
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargestNum([12, 31, 1, 34, 10, 1]));
console.log(secondLargestNum([10, 5, 10]));
// space Complextity: o(1)


// question 2 - Rotate Array by k
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative

// Input: nums = [1,2,3,4,5,6,7], k = 3 ---->>>> output: [5,6,7,1,2,3,4]
// Input: nums = [-1, -100, 3, 99], k = 2 ---->>>> output: [3,99,-1,-100]

// Explanation - 
// [1,2,3,4,5,6,7] -> [7,1,2,3,4,5,6] -> [6,7,1,2,3,4,5] -> [5,6,7,1,2,3,4]