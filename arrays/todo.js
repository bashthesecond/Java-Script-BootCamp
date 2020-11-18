const toDos = [{
    text: 'Study',
    complete: true
}, {
    text: 'Siesta',
    complete: false
}, {
    text: 'Wash Dishes',
    complete: true
}, {
    text: 'Pump water',
    complete: false
}, {
    text: 'Laundry',
    complete: false
}]

const deleteTodo = function (toDos, toDoText) {
    const index = toDos.findIndex(function (toDo, index) {
        return toDo.text.toLowerCase() === toDoText.toLowerCase() 
    })

    if (index >= 0) {
        toDos.splice(index, 1)
    } 
}

const getThingsToDo = function (toDos) {
     return toDos.filter (function (toDo) {
        return !toDo.complete
     })
}

const sortTodo = function(toDos) {
    toDos.sort(function (a, b) {
        if (!a.complete && b.complete) {
            return -1
        } else if (a.complete && !b.complete) {
            return 1
        } else {
            return 0
        }                    
    })
}

sortTodo(toDos)
console.log(toDos)

// console.log(getThingsToDo(toDos))

// deleteTodo(toDos, 'study')
// console.log(toDos)
