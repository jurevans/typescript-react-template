var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/* Settings */
var port = 3000;
var assets = 'assets/';

module.exports = {
    /* devtool: 'eval', */
    devtool: 'source-map',
    entry: [
        // Add the react hot loader entry point - in reality, you might only want this in your dev config
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:' + port,
        'webpack/hot/only-dev-server',
        'index.tsx'
    ],
    output: {
        filename: assets + 'js/[name].js',
        publicPath: '/dist',
        path: path.resolve('dist')
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
        modulesDirectories: ['src', 'node_modules'],
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] },
            {
              test: /\.scss$/,
              exclude: /(node_modules)/,
              loader: ExtractTextPlugin.extract(
                    'css!sass?' +
                    'includePaths[]=' + require('node-bourbon').includePaths[0] +
                    '&includePaths[]=' + require('node-neat').includePaths[1]
                )
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './src/sass')]
    },
    plugins: [
        // Add the HMR plugin
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin({ alwaysNotify: true }),
        new ExtractTextPlugin(assets + 'css/[name].css', {
            allowChunks: true
          })
    ]
};
