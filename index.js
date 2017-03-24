'use strict';

var timer = null;

module.exports = function (callback, delay) {
  clearTimeout(timer);
  timer = setTimeout(callback, delay || 1000);
};
