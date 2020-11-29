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
        return searchTextMatch && hideCompletedMatch 
    })

    const incompleteTodos = todos.filter(function(todo) {
        return !todo.completed
    })
    
    document.querySelector('#to-do-container').innerHTML = ''
    document.querySelector('#to-do-container').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#to-do-container').appendChild(generateTodoDOM(todo))
    })
}

//Remove a todo from the list
const removeTodo = function(id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Change status of todo
const toggleTodo = function(id) {
    const toggle = todos.find(function(todo) {
        if (todo.id === id) {
            todo.completed = !todo.completed
        } 
    })
    
}

//get the DOM elements for an individual note
const generateTodoDOM = function(todo) {
    const todoContainer = document.createElement('div')
    const selectTodo = document.createElement('input')
    const newParagraph = document.createElement('span')
    const removeButton = document.createElement('button')
    
    //Setup todo checkbox
    selectTodo.setAttribute('type', 'checkbox')
    selectTodo.checked = todo.completed
    todoContainer.appendChild(selectTodo)
    selectTodo.addEventListener('change', function(e) {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodo(todos, filters)
        
    })    
    
    //Setup todo text
    newParagraph.textContent = todo.text
    todoContainer.appendChild(newParagraph)

    //setup remove button
    removeButton.textContent = 'x'
    todoContainer.appendChild(removeButton)
    removeButton.addEventListener('click', function() {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodo(todos, filters)
    })

    return todoContainer
    
}

//Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todo(s) left`
    return summary
}