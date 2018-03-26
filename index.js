/*
 * require('mini-style!css!less!./style/style.less');
 */
var loaderUtils = require("loader-utils"),
  path = require("path");

module.exports = function () { };
module.exports.pitch = function (remainingRequest) {
  if (this.cacheable) this.cacheable();
  var query = loaderUtils.getOptions(this) || {};
  return [
    "require(" + loaderUtils.stringifyRequest(this, "!" + path.join(__dirname, "addStyle.js")) + ")(require(" + loaderUtils.stringifyRequest(this, "!!" + remainingRequest) + "), " + JSON.stringify(query) + ");"
  ].join("\n");
  // TODO: support hot module
};
