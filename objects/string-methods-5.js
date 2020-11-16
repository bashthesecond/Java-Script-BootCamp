let name = '  Olawale Bashiru  '

//length property
console.log(name.length)

//Convert to upper case
console.log(name.toUpperCase())

//Convert to lower case
console.log(name.toLowerCase())

//Includes method

let password = 'abc123pa sword098'
console.log(password.includes('password'))

//Trim
console.log(name.trim())

//challenge area

// let isValidPassword = function (password) {
//     if (password.includes('password')) {
//         return false
//     } else if (password.length < 9) {
//         return false
//     } else {
//         return true
//     }
// }

//preferred solution

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfpassword'))
console.log(isValidPassword('asds'))
console.log(isValidPassword('asdfgndsk10348'))
