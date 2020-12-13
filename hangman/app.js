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

//Making an http request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                console.log(data)
        } else if (e.target.readyState === 4) {
                console.log('An error has taken place')
        }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=1')
request.send()
// console.log(request)

const countryCode = 'US'
const countries = new XMLHttpRequest()

countries.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
                const countryList = JSON.parse(e.target.responseText)
                const result = countryList.find((country) => country.alpha2Code === countryCode )
                console.log(result.name)
        } else if (e.target.readyState === 4) {
                console.log('An error occurred')
        }
})

countries.open('GET', 'http://restcountries.eu/rest/v2/all')
countries.send()
