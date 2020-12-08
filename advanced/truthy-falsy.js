const products = [{}]
const product = products[0]

//Truthy - values that resolve to true in boolean context
//Falsy - values that resolve to be false in boolean context
// Falsy values - (null, undefined, 0, '', false, NaN)

if (product) {
    console.log('Product found.')
} else {
    console.log('Product not found.')
}