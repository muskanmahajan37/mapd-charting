mapdc.js
=====

Dimensional charting built to work natively with crossfilter rendered using d3.js.

### Installation:

Clone down the repo and run the following commands:

1. `npm install` - to get the dependencies.
2. `npm install -g grunt-cli` - to get the Grunt build tool.
3. `grunt build` - to build the mapdc.js files.
4. `grunt watch` - to automatically rebuild the mapdc.js files after each save.

### Developing mapdc and another project at the same time:

_"What is hard is figuring out a good workflow for developing both an npm module and a project that depends on it at the same time." - http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears_

**If you have not cloned down the mapdc.js repo, do that first.**

Example: 

You are working on the mapd2-frontend project and also need to make changes to mapdc. In this case, run the following commands:

1. `npm link` - inside the mapdc/ repo directory.
2. `npm link @mapd/mapdc` - inside the mapd2-frontend/main/ directory.

This overrides the `node_modules` directory and tells your project to use the mapdc/ repo instead.

### Updating projects that require mapdc after changes are made

Run `npm install @mapd/mapdc@latest --save` from within your project to update to the latest version.
