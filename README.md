# TypeScript Path Alias for Node.js

`tsc` doesn't resolve the path which configured in [`compilerOptions.paths`](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) of `tsconfig.json`.

https://github.com/Microsoft/TypeScript/issues/10866

So, we have to handle it by ourselves.

When building Client Side Application, I mainly use Webpack so ["tsconfig-paths-webpack-plugin"](https://github.com/dividab/tsconfig-paths-webpack-plugin) is enough.

However, when building Server Side Application, I don't feel the need to use Webpack.

So in this sample repo, I use Babel's ["babel-plugin-module-resolver"](https://github.com/tleunen/babel-plugin-module-resolver) as an alternative.

You can find the path alis (`~`) is not resolved in [`distByTsc`](distByTsc/index.js) folder, but it is resolved in [`dist`](dist/index.js).
