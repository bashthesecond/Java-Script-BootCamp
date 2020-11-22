//Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else{
        return []
    }
}

//Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render application todos based on filters
const renderTodo = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        debugger
        return searchTextMatch && hideCompletedMatch 
    })

    const incompleteTodos = todos.filter(function(todo) {
        return !todo.completed
    })

    document.querySelector('#to-do-container').innerHTML = ''
    document.querySelector('#to-do-container').appendChild(generateSummaryDOM(filteredTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#to-do-container').appendChild(generateTodoDOM(todo))
    })
}

//get the DOM elements for an individual note
const generateTodoDOM = function(todo) {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = todo.text
    return newParagraph
    
}

//Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todo(s) left`
    return summary
}