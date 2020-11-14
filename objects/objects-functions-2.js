let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return{
        summary: `${book.title} by ${book.author}.`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let myBookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(myBookSummary.pageCountSummary)

//challenge area

let tempConverter = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / (9 / 5)
    let kelvin = (fahrenheit - 32) * (5/9) + 273.15
    return{
        tempInFahrenheit: fahrenheit,
        tempInKelvin: kelvin,
        tempInCelsius: celsius
    }
}

let tempConverted = tempConverter(74)
console.log(tempConverted)
