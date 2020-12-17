const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }    
   
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const countryList = await response.json()
        return countryList.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch data')
    }
}


const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?htttp://ipinfo.io/json?token=c27ec015602b05')
    if (response.status === 200) {
        return response.json()
    }else {
        throw new Error('Unable to fetch location')
    }
    
}
    
 