const path = require('path');

module.exports = {
    entry: './src/reactjs-search-box',
    output: {
        path: path.resolve(__dirname, 'built'),
        filename: 'reactjs-search-box.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}