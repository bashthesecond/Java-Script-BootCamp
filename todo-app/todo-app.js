const toDos = [{
    text: 'Study',
    complete: true
}, {
    text: 'Siesta',
    complete: false
}, {
    text: 'Wash Dishes',
    complete: true
}, {
    text: 'Pump water',
    complete: false
}, {
    text: 'Laundry',
    complete: false
}]


const listUncompletedTask = toDos.filter(function (toDo) {
        return !toDo.complete
    })

const toDosStatus = document.createElement('h3')
toDosStatus.textContent = `You have ${listUncompletedTask.length} todo(s) left`
document.querySelector('body').appendChild(toDosStatus)

toDos.forEach(function (toDo) {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = toDo.text
    document.querySelector('body').appendChild(newParagraph) 
})

document.querySelector('#create-task').addEventListener('click', function () {
    console.log('Task Added')
})