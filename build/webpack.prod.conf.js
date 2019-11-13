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
const utils = require('./utils');
const config = require('../config/prod.env');

const path = require('path');

const {VueLoaderPlugin} = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理文件夹
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV === 'testing' ? "testing" : config.NODE_ENV

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  mode: "production",
  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath, //静态文件目录，如果网站路径直接指到dist目录，请注意改为/
    filename: utils.assetsPath('js/[name].[hash].js'),
    chunkFilename: utils.assetsPath('js/[name].[hash].js')
  },
  plugins: [

    new webpack.DefinePlugin({
      'process.env': env
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[hash:7].css'),
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      favicon: './static/favicon.ico',
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

    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
});

if (config.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
  new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig;
