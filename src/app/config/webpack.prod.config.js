const path = require('path')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  target: 'web',
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, '../..', 'client', 'index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', '..', 'public')
  },
  devtool: '#source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
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
