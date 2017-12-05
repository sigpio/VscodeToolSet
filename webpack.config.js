var path = require('path');
var htmlWebPackPlugin = require('html-webpack-plugin');
var prettier = require("prettier");

var src = path.resolve(__dirname, './src');
var dist = path.resolve(__dirname, './dist');

module.exports = {
    entry: src + '/js/module.js',
    output: {
        path: dist,
        filename: 'bundle.js'
    },

    devtool: 'inline-source-map',

    devServer: {
        port: 3002,
        open: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new htmlWebPackPlugin({
            template: src + '/index.html',
            filename: 'index.html'
        })
    ]
};