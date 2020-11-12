Function - input(argument), code, output(return value)

let greetUser = function () {
    console.log('welcome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)
console.log(square(3))

//challenge area
//Convert fahrenheit to celsius

let convertFahrenheitToCelsius = function (temp) {
    let result = (temp - 32) * 5/9
    return result
}

let temp1 = convertFahrenheitToCelsius(32)
let temp2 = convertFahrenheitToCelsius(68)

console.log(temp1)
console.log(temp2)
