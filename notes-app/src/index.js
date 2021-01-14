import { getNotes, createNote, removeNote, updateNote } from './notes'
import { getFilters, setFilters } from './filters'

// console.log(getNotes())
// createNote()
// removeNote()

// updateNote('8e2bf9f6-077c-4303-9510-dd2e1d0d3e48', {
//     title: 'My note title',
//     body: 'My note body'
// })
// console.log(getNotes())

console.log(getFilters())

setFilters({
    searchText: 'office',
    sortBy: 'byCreated'
})

console.log(getFilters())