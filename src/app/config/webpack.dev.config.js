const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    main: [path.resolve(__dirname, '../..', 'client', 'bootstrap.js'), 'webpack-hot-middleware/client', path.resolve(__dirname, '../..', 'client', 'dev.js')]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'app', 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
}
