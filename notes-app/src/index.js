import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'



//Render notes to user
renderNotes()

//Setup new note 
document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = createNote()
    location.assign(`/edit.html#${noteID}`)
})

//Setup search bar
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

//Setup notes arrangement options
document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

//Setup universal update from different tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'notes')
    renderNotes()
})

