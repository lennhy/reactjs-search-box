const path = require('path');

module.exports = {
    entry: './src/example.js',
    output: {
        path: path.resolve(__dirname, 'example'),
        filename: '[name].js'
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
    },
    devServer: {
        contentBase: path.join(__dirname, "example"),
        compress: true,
        port: 6996
    }
}