# Typescript/React/Redux

Required to build:

* Node
* NPM

To install dependencies:

`npm install`

Start local development server:

`node server.js`

Run tests in local environment:

`npm run test`

Primary dependencies (installed by npm) needed to do a server-side build:

* Webpack (JavaScript module bundler)
* Webpack-Dev-Server (Local development server with "watch" / "reload")
* React
* Redux
* TypeScript (With `@types` for Node, React, etc.. Adds strong type-checking to ES5/ES6 and provides transpiler)
* Axios (XHR handling, chosen over "fetch" for handling timeouts and progress)
* Karma (test runner)
* Mocha (test framework)
* Chai (assertion library)
* Sinon (faking environments)
* Bourbon (Sass framework with Mixins - CSS development)
* Bourbon-Neat (Grid framework for Bourbon)

Client-side:

Webpack builds a single JavaScript module (/dist/assets/js/main.js as well as rendering Sass+Bourbon into CSS /dist/assets/css/main.css. Webpack supports building modules into single files if needed, but that would increase the number of HTTP requests. Current configuration creates single JS and CSS assets. index.html holds the Root element that React renders the App container to (this may change, but suits the goals of this ticket).

Etc:

Manually run `webpack`:

`npm run build`

Or:

`webpack --config=config/webpack.config.js`
