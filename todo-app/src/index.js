// Add necessary imports
import { setFilters } from './filters'
import { createTodo } from './todos'
import { renderTodos } from './views'

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#search-to-do').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

// Set up form submission handler
document.querySelector('#create-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    
    const text = e.target.elements.newTodo.value.trim()
    
    createTodo(text)
    renderTodos()
    e.target.elements.newTodo.value= ''
    
})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        renderTodos()
    }
})






