# TypeScript Path Alias for Node.js

`tsc` doesn't resolve the path which configured in [`compilerOptions.paths`](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) of `tsconfig.json`.

https://github.com/Microsoft/TypeScript/issues/10866

So, we have to handle it by ourselves.

When building Client Side Application, I mainly use Webpack so ["tsconfig-paths-webpack-plugin"](https://github.com/dividab/tsconfig-paths-webpack-plugin) is enough.

However, when building Server Side Application, I don't feel the need to use Webpack.

So in this sample repo, I use Babel's ["babel-plugin-module-resolver"](https://github.com/tleunen/babel-plugin-module-resolver) as an alternative.

You can find the path alis (`~`) is not resolved in [`distByTsc`](distByTsc/index.js) folder, but it is resolved in [`dist`](dist/index.js).

## Live Reloading or Hot Reload or Hot Module Replacement (HMR)

I use [node-dev](https://github.com/fgnass/node-dev) for Live Reloading.

Check [`.node-dev.json`](.node-dev.json) and you can find [@babel/register](https://babeljs.io/docs/en/babel-register) is set for `.js` files.

Here is the flow of Live Reloading.

1. `tsc --build --watch` watches file changes under `src` directory. If it detects changes, the compiled `.js` codes under `distByTsc` folder are changed.
2. The change of the compiled `.js` codes under `distByTsc` fires `node-dev`
3. According to `.node-dev.json`, `babel` is complied the `.js` then the codes are executed!
