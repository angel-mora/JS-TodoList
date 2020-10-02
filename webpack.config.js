const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'complete.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
  },
};