import { getTodos, removeTodo, toggleTodo, editTodo } from './todos'
import { getFilters } from './filters'
import { renderNotes } from '../../notes-app/src/views'

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const {searchText, hideCompleted} = getFilters()
    const todos = getTodos()
    const todoEl = document.querySelector('#to-do-container')

    const filteredTodos = todos.filter(({text, completed}) => {
        const searchTextMatch = text.toLowerCase().includes(searchText.toLowerCase())
        const hideCompletedMatch = !hideCompleted || !completed
        return searchTextMatch && hideCompletedMatch 
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
    
    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.sort((a, b) => {
            if (parseInt(a.priority) > parseInt(b.priority)) {
                return -1
            } if (parseInt(b.priority) > parseInt(a.priority)) {
                return 1
            } else {
                return 0
            }
        }).forEach((todo) => {
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
    const todoText = document.createElement('input')
    const removeButton = document.createElement('button')
    const priorityList = document.createElement('select')
    const highOption = document.createElement('option')
    const mediumOption = document.createElement('option')
    const lowOption = document.createElement('option')
    
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
    todoText.value = todo.text
    containerEl.appendChild(todoText)
    todoText.addEventListener('input', e => {
        if (e.target.value.length > 0) {
            editTodo(todo.id, {
                text: e.target.value.trim()
            })
        }
        todoText.value = todo.text
    })
    
    //Setup priority dropdown
    priorityList.setAttribute('name', 'priorityListValue')
    highOption.textContent = 'high'
    highOption.value = '3'
    mediumOption.textContent = 'medium'
    mediumOption.value = '2'
    lowOption.textContent = 'low'
    lowOption.value = '1'
    priorityList.appendChild(highOption)
    priorityList.appendChild(mediumOption)
    priorityList.appendChild(lowOption)
    todoEl.appendChild(priorityList)
    priorityList.value = todo.priority
    priorityList.addEventListener('change', e => {
        editTodo(todo.id, {
            priority: e.target.value
        })
        renderTodos()
    })

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