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

var w95 = css`
  :host {
    width: 95%;
  }
`

var shadow = css`
  :host {
    box-shadow: 4px 4px #f0f0f0, 4px 4px #f0f0f0;
  }
`

module.exports = function (state, emit) {
  return html`
    <body class='flex flex-column items-center bg-near-white ${height}'>
      <div class='${inlineTable} bg-white mt5 ${w95} ${shadow} h-50 br2'>
      <div class='flex bb bw1 b--light-gray w-90 mh4 mt3'>
        <h3 class='sans-serif mid-gray'> URL Editor </h3>
      </div>
        ${urlInput(state.url, emit)}
        ${urlParts(state.protocol, state.host, state.path, state.querystring, emit)}
     </div>
    </body>
  `
}
