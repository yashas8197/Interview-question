//Recursion: When a function calls itself until a specified condition is met.

// Problem: Print your Name N times using recursion

function printName(i, n){
    if(i > n){
       return;
    }else{
        console.log("yashas")
        i++
        printName(i,n)
    }
}

console.log(printName(1,5))


// Print 1 to N using Recursion using Recusion

function print1toN(i,n){
    if(i>n){
        return;
    }
    console.log(i)
    print1toN(i+1,n)
}

console.log(print1toN(1,5))

// Problem: Print from N to 1 using Recursion

function printNTo1(i,n){
    if(i<1){
        return;
    }
    console.log(i)
    printNTo1(--i,n)
}

console.log(printNTo1(4,4))

// print 1 to N with using recursion without i++

function incrementWithoutOperator(i,n){
    if(i < 1){
        return;
    }
    incrementWithoutOperator(i-1,n)
    console.log(i)
}

console.log(incrementWithoutOperator(3,3))

// print n to 1 using recursion without i--

function decrementWithoutOperator(i,n){
    if(i > n){
        return;
    }
    decrementWithoutOperator(i + 1, n);
    console.log(i)
}
decrementWithoutOperator(0,3)

// Sum of first N numbers

// Parameterized way

function sumOfFirstNum(i,sum){
    if(i < 1){
        console.log(sum)
        return;
    }
    sumOfFirstNum(i - 1,sum + i)
}

sumOfFirstNum(4,0)

//Functional way

function sumOfNum(n){
    if(n === 0){
        return 0;
    }
    return n + sumOfNum(n-1)
}

console.log(sumOfNum(4))

//Factorial of numbers using recursion

function getFactorial(n){
    if(n === 1){
        return 1
    }
    return n * getFactorial(n-1)
}

console.log(getFactorial(4))

// reverse an array using recursion

const arr = [2,1,2,3,4]

function swapArray(left,right){
    if(left >= right) return;
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    swapArray(left + 1, right - 1)
    return arr;
}

console.log(swapArray(0,4))


// check if the string is plaindrom or not using recursion
const str = "madam"
function isPalindrom(left,right){
    if(left >= right) return true
    if(str[left] !== str[right]){
        return false
    }
    return isPalindrom(left + 1, right - 1)
}

console.log(isPalindrom(0,str.length - 1))







