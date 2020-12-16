const getDataCallBack = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}

getDataCallBack(2, (error, data) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        getDataCallBack(data, (error, data) => {
            if (error) {
                console.log(`Error: ${error}`)
            } else {
                console.log(data)
            }
        })
    }
})

 
// const getDataPromise = (num) => new Promise((resolve, reject) => {
//     setTimeout(() => {  
//         typeof num === 'number' ? resolve(num * 2) : reject('Promise Error encountered!')
//     }, 2000)
// })

// getDataPromise(2).then((data) => {
//     getDataPromise(data).then((data) => {
//         console.log(data)
//     }, (err) => {
//         console.log(`Error: ${err}`)
//     })
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

// getDataPromise('2').then((data) => {
//     return getDataPromise(data)
// }).then((data) => {
//     return getDataPromise(data)
// }).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

const getDataPromise = (val) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof val === 'number') {
            resolve(val * 2)
        } else {
            reject('An error occurred')
        }
    }, 2000)
})

getDataPromise(4).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(`Error: ${err}`)
})