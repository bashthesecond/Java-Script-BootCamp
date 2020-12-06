function list(names){
    //your code here
    let newList = ''
    for (let i = 0; i < names.length; i++) {
      newList = newList + names[i].name
      if (i == names.length - 1) {
        return newList
      } else if (i == names.length - 2) {
        newList = newList + ' & '
      } else {
        newList = newList + ', ' 
      }
    }
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))

