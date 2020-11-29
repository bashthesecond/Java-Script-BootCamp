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
document.querySelector('#create-note').addEventListener('click', function(e) {
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
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

//Setup notes arrangement options
document.querySelector('#filter-by').addEventListener('change', function(e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

//Setup universal update from different tabs
window.addEventListener('storage', function(e) {
    if (e.key === 'notes')
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
})

