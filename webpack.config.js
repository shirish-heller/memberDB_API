const path = require('path');
const nodeExternals = require('webpack-node-externals');


const config = {
    target: 'node',
    externals: [nodeExternals()],
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                          ['@babel/preset-env', {
                            'targets': {
                              'node': 'current'
                            }
                          }]
                        ]
                      }
                },
                exclude: /node_modules/
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
      }
}

module.exports = config;