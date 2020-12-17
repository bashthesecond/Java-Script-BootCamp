const getDataPromise = (val) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof val === 'number') {
            resolve(val * 2)
        } else {
            reject('An error occurred')
        }
    }, 2000)
}) 

const processData = async () => {
    let data = await getDataPromise(2)
    data = getDataPromise(data)
    return data
}

processData().then((data) => {
    console.log('Data', data)
}).catch((err) => {
    console.log('Error', err)
})


