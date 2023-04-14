const path = require('path')
const nodeExternals = require('webpack-node-externals')


module.exports = {
    mode: 'production',
    entry: './index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        }]
    }
};