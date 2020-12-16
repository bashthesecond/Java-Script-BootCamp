const createCounter = () => {
    let count = 0
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        }, 
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.count = 10
console.log(counter.get())


const add = (a) => {
    return (b) => {
        return a + b 
    }
}
const add10 = add(10)
console.log(add10(-2))


const createTipper = (tip) => {
    return (amount) => {
        return amount * tip
    }
}
const createTipper15 = createTipper(.15)
const createTipper20 = createTipper(.20)
const createTipper25 = createTipper(.25)

console.log(createTipper15(100))
console.log(createTipper20(100))
console.log(createTipper25(100))