const test = [2, 3, 6]

// console.log(test.every(function(letter) {
//     return typeof letter === 'number'
// }))

// const isSmall = function(num) {
//     let status = true 
//     num.forEach(n => {
//         if (n >= 5) {
//             status = false
//         } else {
//             // status
//         }   
//     })
//     return status
// }

// console.log(isSmall(test))

// const word = 'lion'

// word.split('').forEach(letter => console.log(letter))


// const addNumber = function () {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }

// console.log(addNumber(5, 6, 8, 10))


// this.grade >= 70 ? `${this.firstName} is passing the class.` : `${this.firstName} is failing the class.`


// let grade = 80

// console.log(grade >= 70 ? `Ola is passing the class.` : `Ola is failing the class.`)



//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. isIsogram("Dermatoglyphics") == true - isIsogram("aba") == false - isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str){
    if (str.length === 0) {
          return true
      } else {
          const strArray = str.toLowerCase().split('')
          let newStr = ''
          let status = true
          strArray.forEach(function(letter) {
              if (!newStr.includes(letter)) {
                  newStr +=letter
              } else {
                  status = false
              }
          })
          return status 
        }
          
}

console.log(isIsogram('moOse'))