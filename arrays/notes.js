const notes = [{
    title: 'my next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habits to improve',
    body: 'Living healthy. Being conscious of having a clean environment. my communication.'
}, {
    title: 'Pending projects',
    body: 'Javascript - in view. React Native - yet to start'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'my'))

// const note = findNote(notes, 'pending www projects')
// console.log(note)

sortNotes(notes)
console.log(notes)