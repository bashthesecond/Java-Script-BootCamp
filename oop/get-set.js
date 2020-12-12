const data = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

//Access data object
data.location = '  Philadelphia  '
data.location = ' New York City'
console.log(data)
