// --- Direction
// Write a program that console logs the numbers from 1 to n. But for multipy of 3, print "fizz" instead of number and for the multiplies of 5 print "buzz". For  numbers which are multiples of both 3 and 5 print "fizzbuzz".
//--- Example
// fizzbuzz(5);
// 1
// 2
// fizz
// 4
// buzz

function fizzBuzz(n) {
  const fizzBuzzArr = [];
  for (let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0 ){
      fizzBuzzArr.push("fizzbuzz")
    }else if(i % 5 === 0){
      fizzBuzzArr.push("buzz")
    }else if(i % 3 === 0){
      fizzBuzzArr.push("fizz")
    }else{
      fizzBuzzArr.push(i)
    }
  }
  return fizzBuzzArr
}

console.log(fizzBuzz(20));
