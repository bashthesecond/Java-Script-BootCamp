//Global scope (convertFahrenheitToCelsius, temp1, temp2)
  //Local scope (temp, result)
    //Local scope (isFreezing)

let convertFahrenheitToCelsius = function (temp) {
    let result = (temp - 32) * 5/9
    
    if (result <= 0) {
        let isFreezing = true 
    }
    return result
}

let temp1 = convertFahrenheitToCelsius(32)
let temp2 = convertFahrenheitToCelsius(68)

console.log(temp1)
console.log(temp2)