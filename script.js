// --- Directions
// Given an array and a chunk size, divide the array into many subarray. where each subarray is of each size 
// --- Example
// chunk([1,2,3,4],2) --> [[1,2],[3,4]]
// chunk([1,2,3,4,5],2) --> [[1,2],[3,4],[5]]
// chunk([1,2,3,4,5,6,7,8], 3) --> [[1,2,3],[4,5,6],[7,8]]
// chuck([1,2,3,4,5],4) --> [[1,2,3,4],[5]]
// chuck([1,2,3,4,5],10) --> [[1,2,3,4,5]]

//this is the only method
function chunk(arr, size){
    let chunks = [];
    let index = 0;

    while(index < arr.length){
        chunks.push(arr.slice(index, index + size))
        index += size
    }
    return chunks;
}

console.log(chunk([1,2,3,4,5],4))