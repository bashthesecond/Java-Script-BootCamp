import { v4 as uuidv4 } from 'uuid'

// Setup the empty todos array
let todos = []

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
}

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
    todos.unshift({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos(todos)
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
    todos.find((todo) => {
        if (todo.id === id) {
            todo.completed = !todo.completed
            saveTodos()
        } 
    })
}

// Make sure to call loadTodos and setup the exports
loadTodos()


export { saveTodos, getTodos, createTodo, removeTodo, toggleTodo, loadTodos }