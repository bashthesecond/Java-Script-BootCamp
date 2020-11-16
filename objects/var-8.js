//1st disadvantage - global and local scopes only work with functions as against code block level.
//2nd disadvantage - var has unusual behavior such that during script processing regardless of it's position, it is declared as undefined pending when  position in script where a value was assigned is achieved.
//3rd disadvantage - As a result of 2nd disadvantage, when a script has a code where a variable is reassigned a new value before declaration using 'var', instead of an error to be displayed upon processing, it runs successfully attributing the reassigned value to a variable which has not been declared.  

//1st disadvantage
// let name = function () {
//     var firstName = 'Qudus'
// }
// console.log(firstName)

//2nd and 3rd disadvantage  
age = 10
console.log(age)
var age 
