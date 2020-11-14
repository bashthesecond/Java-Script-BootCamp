//multiple arguments

let add = function(a, b, c) {
    return a + b + c 
}

let result = add(10, 1, 5)
console.log(result)


//Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

let getTip = function (bill, tipPercent = 0.2)  {
    let tipPercentile = tipPercent * 100
    let tip = tipPercent * bill
    return `A ${tipPercentile}% tip on $${bill} would be $${tip}.`
}

let tip = getTip(100, 0.3)
console.log(tip)

let name = 'Jen'
let age = 26

console.log(`Hey, my name is ${name}! I am ${age} years old.`)