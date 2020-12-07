const square = (num) => num * num 

console.log(square(8))

const people = [{
    name: 'Ola',
    age: 26
}, {
    name: 'Bola',
    age: 23
}, {
    name: 'Wale',
    age: 26
}, {
    name: 'Tosin',
    age: 22
}]

const under25 = people.filter((person) => person.age < 25)

console.log(under25)

const person = people.find((person) => person.age === 22)
console.log(person.name)