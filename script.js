// 10 - Find the median of an array in javascript

let arr = [7, 4, 6, 9, 3, 8];

arr.sort()

let median;

if(arr.length % 2 !== 0){
  let medianIndex = Math.floor(arr.length / 2)
  median = arr[medianIndex]
}else{
  let medianIndex = Math.floor(arr.length / 2)
  median = (arr[medianIndex] + arr[medianIndex - 1]) / 2
}

console.log(median)