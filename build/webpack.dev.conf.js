/**
 * Created by sn on 2019/11/7.
 */
/**
 * Created by sn on 2018/5/13.
 */
'use strict'

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('../config/dev.env');
const utils = require('./utils');


const path = require('path');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const {VueLoaderPlugin} = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件夹
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const env = process.env.NODE_ENV === 'testing'?"testing":config.NODE_ENV

const devWebpackConfig = merge(baseWebpackConfig, {

    module: {
        rules: utils.styleLoaders({sourceMap: config.cssSourceMap, usePostCSS: true})
    },
    mode: "development",
    devtool: config.devtool,
    output: {
        path: config.assetsRoot,
        publicPath: config.assetsPublicPath, //静态文件目录，如果网站路径直接指到dist目录，请注意改为/
        filename: utils.assetsPath('js/[name].[hash].js'),
        chunkFilename: utils.assetsPath('js/[name].[hash].js')
    },
    plugins: [
        new VueLoaderPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: utils.assetsPath('css/[name].[hash:7].css'),
        //     allChunks: true
        // }),

        new webpack.DefinePlugin({
            'process.env': env
        }),

        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            favicon:'./static/favicon.ico',
            filename: process.env.NODE_ENV === 'testing'
                ? 'index.html'
                : config.index,
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    ],
    // these devServer options should be customized in /config/index.js
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.join(config.assetsPublicPath, 'index.html') },
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.host,
        port: PORT || config.port,
        open: config.autoOpenBrowser,
        overlay: config.errorOverlay
            ? {warnings: false, errors: true}
            : false,
        publicPath: config.assetsPublicPath,
        proxy: config.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.poll
        }
    }
})


console.log(`热部署地址：http://${config.host}:${config.port}`)
module.exports = devWebpackConfig;
