let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal farm'

console.log(`${myBook.title} by ${myBook.author}`)

//challenge area

let aPerson = {
    name:  'Akeem',
    age: 28,
    location: 'Kano'
}

console.log(`${aPerson.name} is ${aPerson.age} and lives in ${aPerson.location}.`)

aPerson.age = aPerson.age + 1

console.log(`${aPerson.name} is ${aPerson.age} and lives in ${aPerson.location}.`)