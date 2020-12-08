const calcAge = function () {
    console.log(this)
    
}

const age = new calcAge()
console.log(age) 


const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age 
}

Person.prototype.getBio = function () {
    return `${this.firstName} is ${this.age}.`  
} 

Person.prototype.setName = function (fullname) {
    const name = fullname.split(' ')
    this.firstName = name[0]
    this.lastName = name[1]
} 

const me = new Person('Olawale', 'Bashiru', 26)
me.setName('Tosin Bashiru')
console.log(me.getBio())

const person2 = new Person('Qudus', 'Bashiru', 19)
console.log(person2.getBio())

