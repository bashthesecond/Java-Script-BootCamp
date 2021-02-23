import { initializeEditPage, updateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleElement = document.querySelector('#note-title')
const bodyElement =  document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note') 
const lastEditedElement = document.querySelector('#last-edited')
const noteID = location.hash.substring(1)

initializeEditPage(noteID)

titleElement.addEventListener('input', (e) => {
    const note = updateNote(noteID, {
        title: e.target.value
    })
    lastEditedElement.textContent = updateLastEdited(note.updatedAt)
})

//setup note body
bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteID, {
        body: e.target.value
    })
    lastEditedElement.textContent = updateLastEdited(note.updatedAt)
})

//setup remove button
removeElement.addEventListener('click', (e) => {
    removeNote(noteID)
    location.assign('/index.html')
})

// Make window listen for updates in local storage to universally update editors
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteID)
    }
})

