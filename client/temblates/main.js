var html = require('choo/html')

var urlInput = require('./urlInput')
var urlParts = require('./urlParts')

module.exports = function (state, emit) {
  return html`
    <body>
      ${urlInput(state.url, emit)}
      ${urlParts(state.protocol, state.host, state.path, state.querystring, emit)}
    </body>
  `
}
