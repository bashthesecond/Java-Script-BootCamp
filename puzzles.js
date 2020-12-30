//build a function that capitalizes even index positions of a string 
const toWeirdCase = function (string) {
    let newString = ''
    for (i = 0; i < string.length; i++) {
        let a = null
        if (i % 2 === 0) {
            a = string[i].toUpperCase()                
        } else {
            a = string[i].toLowerCase()
        }
        newString = newString + a
    }
    return newString
}

newWord = toWeirdCase('umbrella')
console.log(newWord)

//build the function to find n sequence in this pattern -> A = [1,2,5,11,21,36,57,85,...]
const findTheNth = function (n) {
    const a = []
    const b = []
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            a.push(1) 
        } else {
            if (i === 1) {
                b.push(i)
            } else {
                b.push(b[i - 2] + i)
            }
            a.push(a[i - 1] + b[i - 1])
        }
    }
    return a[n - 1]
}
const a = findTheNth(17)
console.log(a)

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
function squareDigits(num){
    const nS = num.toString().split('')
    let nSquareStr = ''
    nS.forEach(n => {
        const nInt = parseInt(n)
        const square = nInt * nInt 
        nSquareStr += square.toString()
    })
    return parseInt(nSquareStr)
  }

//Welcome, In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it. E.G "a" = 1, "b" = 2, etc.
//Example
//alphabetPosition("The sunset sets at twelve o' clock.")
//Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
function alphabetPosition(text) {
    const textA = text.toLowerCase().split('')
    const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const transformLetter = (letter, letterArray) => {
        const index = letterArray.findIndex((item) => item === letter)
        return index + 1
    }
    let newString = ''
    textA.forEach((el) => {
        let numberE = transformLetter(el, letterArray)
        if (numberE > 0) {
            numberE = numberE.toString()
            newString += numberE + ' '  
        }
    })
    newString = newString.trim() 
    return newString
  }

//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    let vowelsCount = 0;
    const vowelArray = ['a', 'e', 'i', 'o', 'u']
    const strArray = str.split()
    strArray.forEach((el) => {
        if (vowelArray.includes(el)) {
        vowelsCount = vowelsCount + 1
      }
    })
    return vowelsCount;
}

//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
//each taken only once - coming from s1 or s2.
//Examples:
//a = "xyaabbbccccdefww"
//b = "xxxxyyyyabklmopq"
//longest(a, b) -> "abcdefklmopqwxy"
//a = "abcdefghijklmnopqrstuvwxyz"
//longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
    const arr = (s1 + s2).split('')
    let newStr = []
    arr.forEach((el) => {
        if (!newStr.includes(el)) {
        newStr.push(el)
        }
    })
    const result = newStr.sort((a, b) => {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        } else{
            return 0
        }
    })
    return result.join('')
}

//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//HH = hours, padded to 2 digits, range: 00 - 99
//MM = minutes, padded to 2 digits, range: 00 - 59
//SS = seconds, padded to 2 digits, range: 00 - 59
//The maximum time never exceeds 359999 (99:59:59)
function humanReadable(seconds) {
    const ss = seconds % 60
    const mm = (Math.floor(seconds / 60 )) % 60
    const hh = Math.floor(seconds / 3600)
    if (hh > 99) {
      return '99:59:59'
    } else {
      return `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`
    }
  }