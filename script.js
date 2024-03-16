//Write a function that accepts the string. The function should capitalize the firat letter of each word in the string then return the capitalized string.
// ---Example
// capitalize('this is yashas') ---> This Is Yashas
// capitalize('title of the books, movies, songs') ---> 'Title Of The Books, Movies, Songs

//using map
const capitalize = (str) => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1, word.length)).join(" ");

console.log(capitalize('title of the books, movies, songs'))

//using for of

function capitalized(str){
    const words = str.split(' ')
    let result = []
    for(let word of words){
        result.push(word[0].toUpperCase() + word.slice(1))
    }
    return result.join(' ')
} 

console.log(capitalized('this is yashas'))