const myAge = 17
const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote!'
console.log(message)

const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}

const message1 = myAge >= 21 ? showPage() : showErrorPage()
console.log(message1)

const team = ['Tyler', 'Porter']

// const printTeamSize = (team) => `Team size: ${team.length}`
// const printError = () => 'Too many people on your team'


const teamMessage = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'

console.log(teamMessage)