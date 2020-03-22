/*
 * @Author: your name
 * @Date: 2020-03-22 15:15:31
 * @LastEditTime: 2020-03-22 15:19:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /large-number/webpack.config.js
 */
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry:{
        "large-number":"./src/index.js",
        "large-number.min":"./src/index.js",
    },
    output:{
        filename:'[name].js',
        library: 'largeNumber',
        libraryTarget:"umd",
        libraryExport:'default'
    },
    mode: 'none',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ]
    }
}