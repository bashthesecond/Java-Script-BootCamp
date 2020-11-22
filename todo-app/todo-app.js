let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodo(todos, filters)

document.querySelector('#search-to-do').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodo(todos, filters)
})

document.querySelector('#create-todo').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.unshift({
        text: e.target.elements.newTodo.value, 
        completed: false
    })
    saveTodos(todos)
    renderTodo(todos, filters)
    e.target.elements.newTodo.value= ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodo(todos, filters)
})