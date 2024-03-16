//freeCodeCamp

// --- Directions
// Given a string, return a reversed string with the reversed order of Charecter
// --- Example
// reverse('hi') === ih
// reverse('hello') === 'olleh'

function reverse1(str){
    return str.split("").reverse().join("")
}

//freecode camp

//traditional way
function reverse(str){
    let reversed = ""

    for(let i=0; i<str.length; i++){
        reversed = str[i] + reversed
    }

    return reversed
}
console.log(reverse('yashas'))

//using ES6
function reverseStr(str){
    let reversed = ""

    for(let char of str){
        reversed = char + reversed
    }

    return reversed
}
console.log(reverseStr('yashas'))

// --- Directions 
// Given an integer, return an integer that is the reverse
// ordering of numbers
// --- Examples
// reverseInt(15) === 51

function reversedInt(num){
    let reversed = num.toString().split('').join('')
    return parseInt(reversed) * Math.sign(num)
}

console.log(reversedInt(15))

function reverseInt(num){
    let reversed = ''
    let numStr = num.toString()
    for(let char of numStr){
        reversed = char + reversed
    }
    return parseInt(reversed) * Math.sign(num)
}

console.log(reverseInt(-15))
