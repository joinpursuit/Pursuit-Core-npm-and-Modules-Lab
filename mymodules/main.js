const myMath = require("./math-module");

const stringThing = require("./strings-module");

let fourPlusFive = myMath.sum(4, 5);
console.log(fourPlusFive);

let threeTimesFour = myMath.multiply(3, 4);
console.log(threeTimesFour);

let eightDividedBytwo = myMath.divide(8, 2);
console.log(eightDividedBytwo);

let fiveSquared = myMath.square(5);
console.log(fiveSquared);

stringThing.firstChar("This is a long string!");

let stringCheck1 = stringThing.compare("Is this the same?", "Nope!");
let stringCheck2 = stringThing.compare("This is the same", "This is the same");
console.log(stringCheck1);
console.log(stringCheck2);

let backmask = stringThing.reverse("!this is a top secret messagE");
console.log(backmask);

let secretMessage = stringThing.threeLettersBack("Douglas is a handsome genius");
console.log(secretMessage)