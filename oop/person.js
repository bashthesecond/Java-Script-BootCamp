class Person {
    constructor (firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio () {
        let bio = `${this.firstName} is ${this.age}.`
        
        this.likes.forEach(like => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName (fullName) {
        const name = fullName.split(' ')
        this.firstName = name[0]
        this.lastName = name[1]
    }
    set fullName (fullName) {
        const name = fullName.split(' ')
        this.firstName = name[0]
        this.lastName = name[1]
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`
    }

}

class Employee extends Person {
    constructor (firstName, LastName, age, position, likes) {
        super (firstName, LastName, age, likes)
        this.position = position
    }
    getBio () {
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft () {
        return 65 - this.age 
    }
}

class Student extends Person {
    constructor (firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio () {
        return this.grade >= 70 ? `${this.firstName} is passing the class.` : `${this.firstName} is failing the class.`
    }
    updateGrade (score) {
        this.grade +=  score
    } 
}

const boy = new Employee('Ola', 'Bash', 24, 'Teacher', [])
boy.fullName = 'Tosin Bashiru'
console.log(boy.getBio())

