const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * 0.25
    } else {
        throw Error('Argument must be a number')
    }
}

try { 
    const result = getTip(false)
    console.log(result)
} catch(e) { 
    console.log('program continuing')
}