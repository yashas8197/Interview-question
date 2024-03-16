// --- Direction
// Given a string, return the character that is most commonly usedd in the string
// ---Example
// maxChar("abccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar1(str){
    const countObj = {}
    for(let char of str){
        countObj[char] = (countObj[char] + 1) || 1
    }

    let maxCount = 0;
    let maxChar = ''
    for(let key in countObj){
        if(countObj[key] > maxCount){
            maxCount = countObj[key]
            maxChar = key
        }
    }
    return maxChar
}

console.log(maxChar1('apple 1231111'))

function maxChar(str){
    const charMap = {}
    for(let char of str){
        if(charMap[char]){
            charMap[char] = charMap[char] + 1
        }else{
            charMap[char] = 1
        }
    }

    let max = 0;
    let maxChar = ''
    // older way to loop though object by converting object to array
    for(const [key, value] of Object.entries(charMap)){
        if(value > max){
            max = value;
            maxChar = key;
        }
    }
    return maxChar;
}

console.log(maxChar('apple 1231111'))