import { getTodos, removeTodo, toggleTodo } from './todos'
import { getFilters } from './filters'

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const filters = getFilters()
    const todos = getTodos()
    const todoEl = document.querySelector('#to-do-container')

    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch 
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
    
    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'There are no to-dos to show'
        emptyMessage.classList.add('empty-message')
        todoEl.appendChild(emptyMessage)
    }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    
     //Setup container
     todoEl.classList.add('list-item')
     containerEl.classList.add('list-item__container')
     todoEl.appendChild(containerEl)
    
    //Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', (e) => {
        toggleTodo(todo.id)
        renderTodos()
        
    })    
    
    //Setup todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)
    
    //setup remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEl
    
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h3')
    summary.classList.add('list-title')
    const plural = (incompleteTodos.length === 1)? '' : 's'
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    return summary
}

// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM }