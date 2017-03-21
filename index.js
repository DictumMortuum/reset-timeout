'use strict'

let timer = null

module.exports = function(callback) {
  clearTimeout(timer)
  timer = setTimeout(callback, 1000)
}
