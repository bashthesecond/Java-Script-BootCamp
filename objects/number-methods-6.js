let num = 193.843

console.log(num.toFixed(10))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 25

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

let makeGuess = function (guess) {
    let min = 1
    let max = 6
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return guess === randomNum
}

console.log(makeGuess(3))