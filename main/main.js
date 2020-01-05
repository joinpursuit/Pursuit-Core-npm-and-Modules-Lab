const math = require ("./math-module.js")
const string = require ("./strings-module.js")

const {
    sum,
    multiply,
    divide,
    square
} = math

const {
    firstChar,
    compare,
    reverse,
    middleChars
} = string

// console.log(sum(1,9))
// console.log(multiply(2,5))
// console.log(divide(12,4))
// console.log(square(6))

console.log(reverse("hello"))
console.log(compare("a", "a"))
console.log(middleChars("yea"))
console.log(firstChar("hello"))


// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC", "CCCCCAAAAA"]

// const findRepeatedDnaSequences = (s)=>{
//   let obj={};
//   let double=[];
//   for(let i=10;i<s.length;i++){
//       if(obj[s.slice(i-10,i)]){
//         obj[s.slice(i-10,i)]++
//       }else{
//           obj[s.slice(i-10,i)]=1
//       }
//   }
//   for(let key in obj){
//     //   console.log(obj[key])
//       if(obj[key]>1){
//           double.push(key)
//         }
//     }
// //   console.log(obj)
//   console.log(double)
// }

// findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")