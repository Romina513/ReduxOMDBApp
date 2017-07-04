module.exports = {
  entry: [
      './src/index.js'
    ],
    module: {
      loaders: [
        {
          test: /(\.js|\.jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: { presets: ['es2015', 'react'] }
        },
        {
          test: /\.ncss$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
      ]
    },
    output: {
      filename: "indexBundle.js",
      path: __dirname + '/dist'
    }
}
