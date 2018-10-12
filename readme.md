# Webpack 4 - Babel & SCSS with CSS auto-prefixer Boilerplate Starter

A nice starter template for web projects using latest javascript (ES2017) and SASS(scss).


### Installation

```
npm install
```

### Development with live reload

For live reload functionality, run `npm run watch` and open /dist/index.html with vscode 'Live Server' plugin.
```
npm run watch
```

### Build Prod Version

For production version change `mode:` from `development` to `production` in `webpack.config.js`.

```
npm run build
```

### Features:

* ES7 or latest Support via [babel-loader](https://github.com/babel/babel-loader)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* CSS auto-vendor-prefixing via [postcss-loader](https://github.com/postcss/postcss) with the [autoprefixer](https://github.com/postcss/autoprefixer) plugin

When you run `webpack` or `npm run watch` or `npm run build` I use the [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) and [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to inject the `index.html` file with the css link in the head and the js bundle link at the bottom of the body them move all built files to the `dist` folder.