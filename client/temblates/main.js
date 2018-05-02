var html = require('choo/html')
var css = require('sheetify')

var urlInput = require('./urlInput')
var urlParts = require('./urlParts')

css('tachyons')

var height = css`
  :host {
  height: 100vh
  }
`

module.exports = function (state, emit) {
  return html`
    <body class='flex flex-column items-center bg-near-white ${height}'>
      ${urlInput(state.url, emit)}
      ${urlParts(state.protocol, state.host, state.path, state.querystring, emit)}
    </body>
  `
}
