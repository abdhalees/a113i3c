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
var inlineTable = css`
    :host {
      display: inline-table;
    }
`

module.exports = function (state, emit) {
  return html`
    <body class='flex flex-column items-center bg-near-white ${height}'>
      <div class='${inlineTable} bg-white mt5 w-90 h-75 ba bw1 b--light-gray br2'>
      <div class='flex bb bw1 b--light-gray w-90 mh4'>
        <h3 class='roboto mid-gray'> URL Editor </h3>
      </div>
        ${urlInput(state.url, emit)}
        ${urlParts(state.protocol, state.host, state.path, state.querystring, emit)}
     </div>
    </body>
  `
}
