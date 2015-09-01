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
      'sinon',
    ],
    preprocessors: {
      'tests.webpack.js': [
        'webpack',
      ],
    },
    reporters: [
      'dots',
    ],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader?plugins=babel-plugin-rewire' },
          { test: /\.json$/, loader: 'json-loader' },
        ],
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
