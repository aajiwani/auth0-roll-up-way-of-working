# auth0-roll-up-way-of-working
This repo deals with a very recent exploration on how rollup could be relevant while working with Auth0 based tech (Rules/Hooks/Actions)

### Context
Very recently, I was working in the arena of `Auth0` -- Very enthusiastically as we were migrating our `rules/hooks` to `actions` that have a deadline associated with Auth0.

Getting into the depth of complexities we had in the past, I learned that to keep things simple as per the BAU standards from Auth0, we collectively kept our units per file. If you have tens of things to perform, they all would be situated under a single file. Hence, the file feels and looks like bloatware, where everything resides alongside our logic code.

Now, very recently (as opposed to previously), Auth0 has recently baked in the capability of adding in or requiring public `npm` packages within the code base. It doesn't help with passing around secure code as what it implies is everything has to be available in NPM public space to be consumed. They may change and add something to consume private `npm` packages, but nothing sort of a promise is coming up from their end.

### Need
As mentioned above, there are bits and pieces within the framework you work with that you want to avoid spilling into the public world. There could be certain variable names or styles of code you want private to yourself and your organization. Unfortunately, the only way present today is to lay out code in a single file for such a case; no includes could help you.

But I still wanted abstraction, common code, and maybe even patterns to help me through our code; after all, we have come far away from managing our code that way (a unit of code and nothing beyond). Do we have any way out with current limitations in place?

### An idea
Guess what! We do have a way out—many ways. Roots in the JS world tell us that there has been a need for the transformation of codes since the vanilla JS days when the node wasn't even a thing. But today, we live in a world where things like `roll-up`, `webpack`, `babel`, and `parcel` are readily available.

Essentially, the above implies that given the result's specs, we can transform any code to that in the JavaScript world. I was looking for a way to merge several files to easily work with SOLID and DRY principles for my code base.


### Example
For the sake of example (I am purposely making it stupid), think of having a file that you have tested for being a unit, and you're confident that it is working as you want it to be, e.g. (`sum-up.js`):

```js
export const SumUp = (...args) => {
const initialValue = 0;

const sumWithInitial = args.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	initialValue
);

return sumWithInitial;
};
```

Now imagine, for some crazy reason, I want to call this method in my `pre-registration` action; what I can do is:

```js
import { SumUp } from "../helpers/sum-up";

exports.onExecutePreUserRegistration = async (event, api) => {
    console.log("Hello Pre-Reg");
    console.log("Summing it up: ", SumUp(1, 2, 3, 4, 5, 6));
    console.log("Bye Pre-Reg");
}
```

Looking closely, we would have a problem in Auth0 space, but imagine if we can get a result as this:

```js
'use strict';

const SumUp = (...args) => {
	const initialValue = 0;
	const sumWithInitial = args.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue
	);

	return sumWithInitial;
};

  
exports.onExecutePreUserRegistration = async (event, api) => {
	console.log("Hello Pre-Reg");
	console.log("Summing it up: ", SumUp(1, 2, 3, 4, 5, 6));
	console.log("Bye Pre-Reg");
};
```

And this is possible by adding just a small piece of transformation within the process.

---

### TLDR
`Roll-up` (which I have used, but there are other ways) can help us improve our code bases to form the output that Auth0 wants, giving us the flexibility of keeping our code simple and structured (abstracted). This repo speaks of a clear and simple example to get that going. You can think of many other ways of consuming this repo per your need.

---

#### Usage
Please refer to [USAGE.md](./USAGE.md) to familiarize yourself with how to consume the matter above.