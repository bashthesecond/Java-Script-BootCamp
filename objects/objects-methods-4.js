let restaurant = {
    name: 'KFC',
    guestCapacity: 75,
    guestCount: 0s,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }
}




console.log(restaurant.checkAvailability(4))