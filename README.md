# Keep The Axe Sharp
[ ![Codeship Status for maximmcnair/keeptheaxesharp](https://codeship.com/projects/2c3e1af0-1dd0-0133-2090-06d3bb3e96db/status?branch=master)](https://codeship.com/projects/95113)

---

## Dependencies
  - [node.js](https://nodejs.org) `~0.10.37`
  - [npm](https://www.npmjs.com) `~1.4.28`
  - [gulp.js](http://gulpjs.com/) `~3.8.11`

## Setup

```
npm install
npm gulp -g
```

Rename `example-properties.js` to `properties.js` adding in github auth id and secret. This can be setup through your github account here `https://github.com/settings/applications/new`.

## Running the app
---

`gulp dev` - This will build assets and setup watches for the `src` folder for changes. On a change it will build asssets, and run all tests and linting.

`npm start` - This will run the node backend, this is accessable in your browser at `http://127.0.0.1:3600/`

## Release History
---

This repo follows [Semantic Versioning](http://semver.org/).
