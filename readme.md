# modular-vite


## Yarn Version

Use of a consistent version of `yarn` achieved with the `packageManager` setting in `package.json` along with a cached copy of `yarn` itself in the `.yarn/releases` folder.

Update to the latest yarn by running:

```bash
yarn set version latest --yarn-path
git add package.json .yarn/releases
```