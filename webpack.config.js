const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, '..', './client/index.js'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '..', './client'),
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            components: path.resolve(__dirname, '..', './client/src/components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|eot|otf|svg|png)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader'
            }
        ]
    }
};



// var path = require('path');
// var webpack = require('webpack');
// module.exports = {
//  entry: './client/src/index.js',
//  output: {
//   path: path.join(__dirname, 'client'),
//   filename: 'bundle.js'
//  },
//  module: {
//   loaders: [{
//    test: /.jsx?$/,
//    loader: 'babel-loader',
//    exclude: /node_modules/,
//    query: {
//     presets: ['es2015', 'react']
//    }
//   },
//   {
//    test: /\.css$/,
//    loader: "style-loader!css-loader"
//   }]
//  }
// }

// const path = require('path');
// module.exports = {
//   entry: { main: './src/index.js' },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       }
//     ]
//   }
// };