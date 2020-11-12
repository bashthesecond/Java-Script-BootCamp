//Variable shadowing - a concept where a previously assigned variable is reassigned in a different scope and referenced such that it prevents the earlier defined variable from access.
//Leaked variable -  if a an unassigned variable is updated in a local variable, it creates a global variable in the root, providing it the value of which it was assigned in the local scope. This can cause a script to malfunction and is important to avoid this as much as possible.

// Global (name)
  //Local
    //Local
  //Local


let name = 'Andrew'

if (true) {
    let name = 'Mike'
    if (true) {
        name = 'Jen'
        console.log(name)
    }
    console.log(name)
}

if (true) {
    console.log(name)
}