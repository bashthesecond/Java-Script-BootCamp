const game1 = new Hangman('cart pusher ', 2)
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses') 

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    
})

getPuzzle(9).then((puzzle) => {
    console.log(puzzle)    
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getCountry('MX').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}}`)
})

// fetch('http://puzzle.mead.io/puzzle', {}).then((data) => {
//     if (data.status === 200) {
//         return data.json()
//     } else {
//         throw new Error('Unable to fetch puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })