# Vue Component Library for CCV with Disco Design System.

This repo contains the Disco Design System components. The components are packaged as an NPM package and published to Brown CCV's GitHub Package Registry.

The components are built under `src/components` and documented using Storybook under `src/stories`. 
Components are Vue Single File Components (SFC). Stories are written in MDX and use the `storybook/addon-docs` addon for better documentation of props, events, slots, etc.

Note: This library is in active development with `@brown-ccv/disco-styles`.

## Project setup
```
yarn install
```

### Compiles and creates dist files for production.
```
yarn build
```

### Compiles and serve Storybook in development.
```
yarn storybook:serve
```

### Compiles and prepares Storybook for production.
```
yarn storybook:build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Contributing

Branch off `master`. Use `yarn commit` to commit changes. Submit a PR.

New components can be accepted into `master` after going through code review. Test coverage should be `100%` for all components in `master`, so make that happen before you open a PR. 

### GitHub Actions and Semantic Release

On push to `master`, the workflow will test, build, package, and publish the library to GitHub Package Registry. It will also build and deploy Storybook to Firebase: https://disco-components.web.app

## Usage

To install this package you will need to tell NPM about `@brown-ccv`'s registry. 
To do that, create a `.npmrc` file in the root of your project and add:

```
@brown-ccv:registry=https://npm.pkg.github.com
```

Login with your GitHub username and a personal access token with`repo` and `read:packages` scopes:

```
npm login --registry=https://npm.pkg.github.com --scope=@brown-ccv
```

Then, simply add the package:
```
npm install @brown-ccv/disco-components
```
or
```
yarn add @brown-ccv/disco-components
```

Note that, to install `@brown-ccv` packages that are not public in CI, you need to authenticate with npm using a GitHub Personal Access Token, for example:

```yaml
- name: Install dependencies
  run: |
    npm config set "//npm.pkg.github.com/:_authToken" ${{ secrets.GH_TOKEN }}
    yarn install
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
