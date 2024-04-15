import { SumUp, Maths } from "auth0-roll-up-way-of-working/sum-up.js";

console.log("Calling SumUp -- Started");
console.log(SumUp(1, 2, 3, 4, 5, 6));
console.log("Calling SumUp -- Ended");

console.log("Calling class Maths -- Started");
let mathsInstance = new Maths();
console.log("Class name:", mathsInstance.Name);
console.log("Summming some numbers:", mathsInstance.sum(1,2,3,3));
console.log("Calling class Maths -- Ended");