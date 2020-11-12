// JS uses Lexical scoping
//Global scope - defined outside of all code brackets
//Local scope -  defined inside a code bracket

//Global scope (varOne)
  //Local scope (varTwo)
    //Local scope (varFour)
  //Local scope (varThree)
  


let varOne = 'varOne' 

if (true) {
    console.log('varOne')
    let varTwo = 'varTwo'
    console.log(varTwo)
    
    if (true) {
        let varFour = 'varFour'
    }
}
if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)


