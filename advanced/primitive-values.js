//Primitive value: Values without properties such as: string, boolean, number, null & undefined

//Object: myObject -> Object.prototype -> null
const product = {
    name: 'Ola'
}
console.log(product.hasOwnProperty('name'))
console.log(product)

//Array: myArray -> Array.prototype -> Object.Prototype -> null
const array = ['ola', 'wale', 'Qudus']
console.log(array)

//Function: myFunction -> Function.prototype -> Object.Prototype -> null
const  getScore = () => 1
console.log(getScore)

//String: myString -> String.prototype -> Object.prototype -> null
const word = 'Hello world' //converts to object behind the scene
console.log(word)

//number: myNumber -> Number.prototype -> Object.prototype ->null

//Boolean: myBoolean -> Boolean.prototype -> Object.prototype ->null
