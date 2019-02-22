const path = require('path');

const config = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname + 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}

module.exports = config;