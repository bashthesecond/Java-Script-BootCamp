//undefined - used in js to represent absence of a value

//Undefined for variable
let name

name = 'Olawale'

if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log(name)
}


//Undefined for function arguments

let square = function (num) {
    console.log(num)
}

//Undefined for function output

let result = square()
console.log(result)

//Null as assigned value
let age = 78
age = null
console.log(age)

