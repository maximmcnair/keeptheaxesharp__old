var RewirePlugin = require('rewire-webpack');

module.exports = function(config) {
  config.set({
    browsers: [
      'PhantomJS',
    ],
    files: [
      {
        pattern: 'tests.webpack.js',
        watched: false,
      },
    ],
    frameworks: [
      'jasmine',
    ],
    preprocessors: {
      'tests.webpack.js': [
        'webpack',
      ],
    },
    reporters: [
      'dots',
    ],
    webpack: {
      module: {
        loaders: [
          { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.json$/, loader: 'json-loader' },
        ],
      },
      plugins: [
        new RewirePlugin()
      ],
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
