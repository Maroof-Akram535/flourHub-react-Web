const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

        ],

    },

    devServer: {
        contentBase: path.join(__dirname, 'bundle'),
        historyApiFallback: true
    }
}