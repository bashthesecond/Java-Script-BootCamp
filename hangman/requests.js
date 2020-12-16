const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }    
    }).then((data) => {
        return data.puzzle
    })

}


const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return countryList = response.json()
            
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((countryList) => {
        return countryList.find((country) => {
            return country.alpha2Code === countryCode
        })
    })
}

// const getCountry = (countryCode) => {new Promise((resolve, reject) => {
//     const countries = new XMLHttpRequest()
//     countries.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4 && e.target.status === 200) {
//                 const countryList = JSON.parse(e.target.responseText)
//                 const result = countryList.find((country) => country.alpha2Code === countryCode )
//                 resolve(result)
//             } else if (e.target.readyState === 4) {
//                 reject('An error occurred')
//             }
//     })
    
//     countries.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countries.send()
// })} 
    
    
 