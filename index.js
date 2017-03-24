'use strict';

var timer = null;

module.exports = function (callback) {
  clearTimeout(timer);
  timer = setTimeout(callback, 1000);
};
