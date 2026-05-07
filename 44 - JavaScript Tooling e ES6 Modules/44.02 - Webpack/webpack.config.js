const path = require('path'); // CommonJS

module.exports = {
    mode: 'production',
    entry: './scr/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }
        ]
    },
    // 'source-map' - Para no console linkar com o código do index em vez do bundle.js
    devtool: 'source-map'
};