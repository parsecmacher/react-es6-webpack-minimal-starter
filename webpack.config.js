module.exports = {
  entry: './src/js/app.jsx',
  output: {
    filename: 'build/bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  // so you can import jsx files without specifying the extensions
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: [
          /node_modules/,
          /lib/,
          /build/
        ],
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
