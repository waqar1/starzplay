/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: {
    app: ['whatwg-fetch', './client/index.js']
  },
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
          test: /\.(png|svg|jpg|gif)$/, 
          loader: "file-loader?name=/assets/images/[name].[ext]"
      },
      {
        test: /\.css$/, 
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
    },
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}