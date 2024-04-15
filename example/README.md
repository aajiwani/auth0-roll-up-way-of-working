# Example

> This space is like a place holder for Auth0 space you could be working with
>
> Files here may or may not be applicable to your scenario

### Structure

- `src` holds all the code files.
- `src/code-example.js` is something I want to execute on some arbitary action.
    - It could have been encapsulated with the definition like:
        ```js
            exports.onExecutePreUserRegistration = async (event, api) => {
                // Something executing
            }
        ```
- `dist` folder would contain all the transformation outputs (something you can safely paste in Auth0 world).
- `utils/transform.mjs` does the magic of transformation (using [`rollup`](https://rollupjs.org/)).
- `yarn transform` calls `node utils/transform.mjs` -- Not essential but helpful.


### Additional bit
The example uses [`@rollup/plugin-node-resolve`](https://www.npmjs.com/package/@rollup/plugin-node-resolve) to deal with private package scenario; You can read more about it, or if that is not your situation you can safely omit the plugin.

---

### Process

> It is plain and simple, just beware of the `@rollup/plugin-node-resolve`, it can start resolving public `node_modules` as well in your setup

#### Given:
```js
// Usage of private package
import { SumUp, Maths } from "auth0-roll-up-way-of-working/sum-up.js";

console.log("Calling SumUp -- Started");
console.log(SumUp(1, 2, 3, 4, 5, 6));
console.log("Calling SumUp -- Ended");

console.log("Calling class Maths -- Started");
let mathsInstance = new Maths();
console.log("Class name:", mathsInstance.Name);
console.log("Summming some numbers:", mathsInstance.sum(1,2,3,3));
console.log("Calling class Maths -- Ended");
```

#### Output:
```js
'use strict';

// An example global method
const SumUp = (...args) => {
  const initialValue = 0;
  const sumWithInitial = args.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial;
};


// An example class
class Maths {
  constructor() {
    this.name = "ClassMaths";
  }

  get Name() {
    return this.name;
  }

  sum(...numbers) {
    return SumUp(...numbers);
  }
}

console.log("Calling SumUp -- Started");
console.log(SumUp(1, 2, 3, 4, 5, 6));
console.log("Calling SumUp -- Ended");

console.log("Calling class Maths -- Started");
let mathsInstance = new Maths();
console.log("Class name:", mathsInstance.Name);
console.log("Summming some numbers:", mathsInstance.sum(1,2,3,3));
console.log("Calling class Maths -- Ended");
```