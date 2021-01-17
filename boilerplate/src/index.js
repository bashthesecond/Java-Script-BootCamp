const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players}`)
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

let newHouse = {
    yearBuilt: 2020,
    ...house
}

console.log(house)
console.log(newHouse)

const person = {
    name: 'Olawale',
    age: 26
}

const location = {
    city: 'Ogun',
    country: 'Nigeria'
}

const overview = {
    ...person,
    ...location
}

console.log(overview)