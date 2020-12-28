'use strict'

//Set up notes array 
let notes = getSavedNotes()

//Set up filter for notes array
const filters = {
    searchText: '',
    sortBy: 'byCreated'
}

//Render notes to user
renderNotes(notes, filters)

//Setup new note 
document.querySelector('#create-note').addEventListener('click', (e) => {
    const noteID = uuidv4()
    notes.unshift({
        id: noteID,
        title: '',
        body: '',
        createdAt: getTimestamp(),
        updatedAt: getTimestamp(),
    })
    saveNotes(notes)
    location.assign(`/edit.html#${noteID}`)
})

//Setup search bar
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

//Setup notes arrangement options
document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

//Setup universal update from different tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'notes')
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
})

