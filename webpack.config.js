const path = require('path');

module.exports = {
  context: __dirname + "/app",
  entry: ["./js/app.js"],
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: path.resolve(__dirname, './app/js'),
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
     ]
  },
  entry: {
    javascript: "./js/app.js",
    html: "./index.html"
  }
};
