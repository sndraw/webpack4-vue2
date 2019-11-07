/**
 * Created by sn on 2019/11/7.
 */
'use strict'
const utils = require('./utils')
const dev_config = require('../config/dev.env')
const prod_config = require('../config/prod.env')


const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
    ? prod_config.productionSourceMap
    : dev_config.cssSourceMap

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction
    }),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: dev_config.cacheBusting,
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}
