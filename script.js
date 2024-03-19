// --- Direction
// Write a function that accepts a positve number N. The function should console log a step shape with N level using the # charecter. Make sure the step has spaces on teh right hand side
// --- Example
// steps(2)
// '#'
// '##'

//steps(3)
// '#'
// '##'
// '###'

function steps(n) {
  let line = ""
  for (let i = 1; i <= n; i++) {
    line += '#'
    console.log(line)
  }
  
}

steps(4);
