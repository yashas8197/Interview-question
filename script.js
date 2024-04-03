// Easy 14 array problems

// Problem statement: Given an array ‘arr’ of size ‘n’ find the largest element in the array.

/* 
Example:
Input: 'n' = 5, 'arr' = [1, 2, 3, 4, 5]
Output: 5 
*/

function findLargestNum(arr, n) {
  let largest = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestNum([1, 2, 3, 4, 5], 5));

// Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

// Input: ‘n’ = 5, ‘a’ = [1, 2, 3, 4, 5]
// Output: [4, 2]

// The second largest element after 5 is 4, and the second smallest element after 1 is 2.

function secondLargest(arr, n) {
  let sLargest = -1;
  let largest = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      sLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }
  return sLargest;
}

function secondSmallest(arr, n) {
  let smallest = arr[0];
  let sSmallest = Number.POSITIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    if (arr[i] < smallest) {
      sSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] !== smallest && arr[i] < sSmallest) {
      sSmallest = arr[i];
    }
  }
  return sSmallest;
}

function secondLargestAndSmallest(arr, n) {
  let sLargest = secondLargest(arr, n);
  let sSmallest = secondSmallest(arr, n);

  return [sLargest, sSmallest];
}

console.log(secondLargestAndSmallest([1, 2, 3, 4, 5], 5));

// Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.
// Note: Two consecutive equal values are considered to be sorted.

/*
Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: True. 
*/

/* function sortArray(arr, N) {
  for (let i = 0; i < N; i++) {
    if(arr[i] <= arr[i+1]){
      return true;
    }else{
      return false;
    }
  }
}

console.log(sortArray([1, 2, 3, 4, 5], 5)); */

// CHECK THE DIFFERENCE BETWEEN THE TWO IN ChatGPT

function sortArray(arr, N) {
  for (let i = 1; i < N; i++) {
    if (arr[i] >= arr[i - 1]) {
    } else {
      return false;
    }
  }
  return true;
}

console.log(sortArray([1, 2, 3, 4, 5], 5));

//Remove duplicates from sorted array
// You are give a sorted integer arr of size N you need to remove the duplicates from the arr such that each element appears only once. return the length of this new array.

//Input: N = 7; array[] = {1,1,2,2,2,3,3}

function removeDuplicates(arr, N) {
  let newArr = [];
  for (let i = 0; i < N; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr.length;
}

console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 3], 7));

// Remove duplicates in-place from sorted array
// Example: arr[] = [1,1,2,2,2,3,3] -> [1,2,3,_, _, _ ....] -> return 3

/* function removeDuplicates1(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

console.log(removeDuplicates1([1, 1, 2, 2, 2, 3, 3], 7)); */
