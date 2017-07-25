var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var SRC_DIR = path.resolve(__dirname, 'src');

module.exports = options => {
  return {
    entry: SRC_DIR + "/index.jsx",
    output: {
      path: BUILD_DIR,
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /.jsx?/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
  };
};
