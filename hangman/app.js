// HTTP - Hypertext Transfer Protocol
// Request - what do oyi want
// Response - what was done

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

getPuzzle((error, puzzle) => {
    if (error) {
            console.log(`Error: ${error}`)
    } else {
            console.log(puzzle)
        }
})

 