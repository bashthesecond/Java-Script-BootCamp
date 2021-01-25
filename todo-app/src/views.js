import { getTodos, removeTodo, toggleTodo, editTodo } from './todos'
import { getFilters } from './filters'
import SVGList from './index'


// renderTodos
// Arguments: none
// Return value: none
const renderTodos = (SVGList) => {
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
            todoEl.appendChild(generateTodoDOM(todo, SVGList))
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
const generateTodoDOM = (todo, SVGList) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('input')
    const removeButton = document.createElement('button')
    const priorityContainer = document.createElement('div') 
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
        renderTodos(SVGList)
        
    })    
    
    //Setup todo text
    todoText.classList.add('edit-todo')
    todoText.value = todo.text
    containerEl.appendChild(todoText)
    todoText.addEventListener('change', e => {
        if (e.target.value.length > 0) {
            editTodo(todo.id, {
                text: e.target.value.trim()
            })
        }
        todoText.value = todo.text
    })
    
    //Setup priority dropdown
    priorityContainer.classList.add('priority-container')
    const newPrioritySVG = SVGList.prioritySVG.cloneNode(true)
    newPrioritySVG.classList.add('priority-SVG2')
    priorityContainer.appendChild(newPrioritySVG)
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
    priorityContainer.appendChild(priorityList)
    todoEl.appendChild(priorityContainer)
    priorityList.value = todo.priority
    priorityList.addEventListener('change', e => {
        editTodo(todo.id, {
            priority: e.target.value
        })
        renderTodos(SVGList)
    })

    //setup remove button
    const newRemoveSVG = SVGList.removeSVG.cloneNode(true)
    newRemoveSVG.classList.add('remove-SVG')
    removeButton.appendChild(newRemoveSVG)
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos(SVGList)
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
    summary.textContent = `You have ${incompleteTodos.length} task${plural} left`
    return summary
}

// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM }