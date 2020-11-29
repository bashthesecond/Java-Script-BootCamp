//Get id of note from url
const titleElement = document.querySelector('#note-title')
const bodyElement =  document.querySelector('#note-body')
const lastEditedElement = document.querySelector('#last-edited')
const noteID = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteID
})
if (note === undefined) {
    location.assign('/index.html')
}

//setup lest edited


//setup note title  
titleElement.value = note.title
bodyElement.value = note.body
lastEditedElement.textContent = updateLastEdited(note.updatedAt)

titleElement.addEventListener('input', function(e) {
    note.title = e.target.value
    note.updatedAt = getTimestamp()
    lastEditedElement.textContent = updateLastEdited(note.updatedAt)
    saveNotes(notes)
})

//setup note body
bodyElement.addEventListener('input', function(e) {
    note.body = e.target.value
    note.updatedAt = getTimestamp()
    lastEditedElement.textContent = updateLastEdited(note.updatedAt)
    saveNotes(notes)
})

//setup remove button
noteIndex = notes.findIndex(function(note) {
    return note.id === noteID
})
document.querySelector('#remove-note').addEventListener('click', function(e){
    removeNote(noteID)
    saveNotes(notes)
    location.assign('/index.html')
})

// Make window listen for updates in local storage to universally update editors
window.addEventListener('storage', function(e){
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteID
        })
        if (note === undefined) {
            location.assign('/index.html')
        }
        titleElement.value = note.title
        bodyElement.value = note.body
        lastEditedElement.textContent = updateLastEdited(note.updatedAt)
    }
})

