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

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = "Button Clicked"
})

document.querySelector('#remove-notes').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})
