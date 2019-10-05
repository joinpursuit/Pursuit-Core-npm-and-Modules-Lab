const math = require('./math-module.js')
const string = require('./strings-module.js')

let addition = math.sum(2, 3)
console.log(addition)

let multiplication = math.multiply(2, 6)
console.log(multiplication)

let division = math.divide(18, 6)
console.log(division)

let squareRoot = math.square(49)
console.log(squareRoot)


let firstCharacter = string.firstChar("Hello World!")
console.log(firstCharacter)


let comparison = string.compare("Yes", "Yes")
console.log(comparison)

let reversedString = string.reverse("Briany")
console.log(reversedString)

