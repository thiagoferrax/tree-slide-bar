const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/lib/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/lib'),
        filename: 'index.js',
        library: '',
        libraryTarget: 'commonjs'
    },
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, './src/lib/index.js'),
    output: {
        path: path.resolve(__dirname, './dist/lib'),
        filename: 'index.js',
        library: ''
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
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    resolve: {
        modules: [__dirname, 'lib/components', 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
    },
}