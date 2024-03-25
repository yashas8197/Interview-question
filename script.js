// 11. Find the unique element in an array

const arr = [1,2,3,4,,4,5,3,2,1];

function lonelyinteger(arr){
  const obj = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] + 1) || 1
    return acc;
  }, {})
  
  for(let key in obj){
    if(obj[key] === 1){
      return key
    }
  }
}

console.log(lonelyinteger(arr))

//using XOR
function lonelyinteger1(arr){
  let ans = 0;
  for(let i=0; i<arr.length; i++){
    ans = ans ^ arr[i]
  }
  return ans
}

console.log(lonelyinteger1([1,2,3,4,4,5,3,2,1]))