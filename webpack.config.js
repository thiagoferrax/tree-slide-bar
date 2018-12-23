const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/react']
                  }
                }
            }
        ]
    },
    resolve: {
        modules: [__dirname, 'lib/components', 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
      },
}