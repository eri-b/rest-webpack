## Restaurant page

### Getting started
Javascript organized using Webpack and ES6 Modules.
```
npm init -y
npm install webpack --save-dev
npm install webpack-cli --save-dev

npm install eslint --save-dev
./node_modules/.bin/eslint --init
```

To package JS:
`npx webpack`

Output main.js in dist folder, as specified in webpack.config.js

Code linted using ES Lint.
```./node_modules/.bin/eslint src```
Overrides specified in .eslintrc.js.
Code fixed using `./node_modules/.bin/eslint src --fix`

node_modules placed in .gitignore
