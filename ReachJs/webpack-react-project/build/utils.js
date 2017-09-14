/**
 * Created by dllo on 17/8/23.
 */
const config = require('../config')
const path = require('path')
exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetSubDirectory
        : config.dev.assetSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
