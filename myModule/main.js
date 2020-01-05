const {sum,multiply,divide,square} =  require('./math-module.js')
const {firstChar,compareStr,reverse,strLength} =  require('./string-module.js')


console.log(sum(3, 6))
console.log(multiply(3, 6))
console.log(divide(6, 3))
console.log(square(3))

console.log(firstChar("Ohidur"));
console.log(compareStr("Ohidur","Ohidur"));
console.log(reverse("Ohidur"));
console.log(strLength("Ohidur"));
