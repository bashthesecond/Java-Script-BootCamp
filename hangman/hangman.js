class Hangman {
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'        
    }
    getPuzzle () {
        let wordPuzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || (letter === ' ')) {
                wordPuzzle += letter
            } else {
                wordPuzzle += '*'
            }
            
        })
        return wordPuzzle
    }
    makeGuess (guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        
        if (this.status !=='playing') {
            return
        }
    
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses --
        }
        this.calculateStatus()
    }
    calculateStatus () {
        const finished = this.word.every(letter => this.guessedLetters.includes(letter))
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        } 
    }
    getStatusMessage () {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
}

// const Hangman = function (word, remainingGuesses) {
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = []
//     this.status = 'playing' 
// }

// Hangman.prototype.getPuzzle = function () {
//     let wordPuzzle = ''
//     this.word.forEach((letter) => {
//         if (this.guessedLetters.includes(letter) || (letter === ' ')) {
//             wordPuzzle += letter
//         } else {
//             wordPuzzle += '*'
//         }
        
//     })
//     return wordPuzzle
// }

// Hangman.prototype.makeGuess = function (guess) {
//     guess = guess.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(guess)
//     const isBadGuess = !this.word.includes(guess)
    
//     if (this.status !=='playing') {
//         return
//     }

//     if (isUnique) {
//         this.guessedLetters.push(guess)
//     }
//     if (isUnique && isBadGuess) {
//         this.remainingGuesses --
//     }
//     this.calculateStatus()
// }
    


// Hangman.prototype.calculateStatus = function () {
//     const finished = this.word.every(letter => this.guessedLetters.includes(letter))
//     if (this.remainingGuesses === 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     } 

// }

// Hangman.prototype.getStatusMessage = function() {
//     if (this.status === 'playing') {
//         return `Guesses left: ${this.remainingGuesses}`
//     } else if (this.status === 'failed') {
//         return `Nice try! The word was "${this.word.join('')}".`
//     } else {
//         return 'Great work! You guessed the word.'
//     }
// }


