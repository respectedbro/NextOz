const path = require('path');

module.exports = {
    entry: './src/index.js', // или путь к твоему главному JS
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,          // применять к .js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // будет применять Babel
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ]
    },

    mode: 'development'

};