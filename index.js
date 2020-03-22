/*
 * @Author: your name
 * @Date: 2020-03-22 15:16:50
 * @LastEditTime: 2020-03-22 15:21:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /large-number/index.js
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/large-number.min.js');
} else {
    module.exports = require('./dist/large-number.js');
}