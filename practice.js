function list(names){
    //your code here
    let newList = ''
    for (let i = 0; i < names.length; i++) {
      newList = newList + names[i].name
      if (i == names.length - 1) {
        return newList
      } else if (i == names.length - 2) {
        newList = newList + ' & '
      } else {
        newList = newList + ', ' 
      }
    }
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))

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
