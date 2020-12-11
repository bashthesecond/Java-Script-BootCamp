const game1 = new Hangman('cat', 2)
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses') 

puzzleEl.textContent = game1.getPuzzle()
guessesEl.innerHTML = game1.getStatusMessage()

window.addEventListener('keypress', (e) => {
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess)
        puzzleEl.textContent = game1.getPuzzle()
        guessesEl.innerHTML = game1.getStatusMessage()
        
})


