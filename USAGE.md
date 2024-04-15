# Usage

> We will get straight to the code if you want to understand the context of the problem
> Please feel free to check out [README.md](./README.md)

1. Think of the root folder to be a stand-alone private package named `auth0-roll-up-way-of-working`.
2. It has a utility file (`src/sum-up.js`) having two exports (function)`SumUp` and (class)`Maths`.
3. Now imagine you're writing something in your Auth0 repo (`example`), where you want to include those (step 2).
4. I can do that via calling the `transform.mjs` under my work space to do the magic and generate something in `dist` directory.
5. Generate result could be copied or used as per need.

> I have created a small task in `package.json` to execute the above
> 
> "transform": "node utils/transform.mjs"


### Assumptions
1. You know how [`rollup`](https://rollupjs.org/) works.
1. Auth0 requries individual files output, hence I am using [`gulp-rollup-each`](https://www.npmjs.com/package/gulp-rollup-each) for that
1. I have a private module where I am importing things from using [`@rollup/plugin-node-resolve`](https://www.npmjs.com/package/@rollup/plugin-node-resolve) plugin
1. If you don't have such a need (step 3), you can live with one less package :sunglasses: