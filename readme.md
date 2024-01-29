# modular-vite

## modular-scripts task runner

To automate many monorepo tasks this uses `modular-scripts`:

```bash
# add a new package to the monorepo
yarn modular add

# start an app/view with local webpack dev server
yarn modular start PKGNAME
```

## vitest as unit test framework

[Configured](https://github.com/steveukx/modular-vite/blob/main/vite.config.ts) to use [vite](https://vitejs.dev/) as the builder for unit tests run through [vitest](https://vitest.dev/). Using the explicit import style instead of implicit globals for ease of consuming the tests standalone:

```typescript
import { describe, expect, it } from 'vitest';
```

Run from the root of the project as:

```bash
yarn vitest
```

## vite is not the builder

The build is managed by `modular-scripts` which currently uses `webpack` or `esbuild`, so `vite` is not a build tool used for the application as a whole, remaining only an aide to development.

## yarn version

Use of a consistent version of `yarn` achieved with the `packageManager` setting in `package.json` along with a cached copy of `yarn` itself in the `.yarn/releases` folder.

Update to the latest yarn by running:

```bash
yarn set version latest --yarn-path
git add package.json .yarn/releases
```

