# simple z3 web demo

Approximately the simplest possible use of [z3-wasm](https://www.npmjs.com/package/z3-solver) on a webpage.

See [hosted copy](https://bakkot.github.io/simple-z3-demo).


## Building

This uses files from [a fork](https://github.com/Z3Prover/z3/pull/5996). You will need to clone that fork into a directory named `z3` as a sibling of this folder, and build the `src/api/js` subdirectory. Then:

```
npm i
npm run build
```
