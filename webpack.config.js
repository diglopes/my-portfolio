const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'js', 'main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {from: './src/static/favicon.ico'}
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
      minify: {
      html5: true,
      collapseWhitespace: true,
      removeComments: true,
      favicon: './src/favicon.ico'
    },
  }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ["file-loader"]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};