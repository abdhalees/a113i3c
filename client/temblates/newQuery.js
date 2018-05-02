var html = require('choo/html')
var css = require('sheetify')

css('tachyons')

module.exports = function (emit) {
  return html`
          <li class='mb3'>
            <label for='newKey' class='dib w-20 sans-serif'> Key: </label>
            <input type="text" id="newKey" class='mr2 h2 ba b--light-gray code'/>
            <label for='newValue' class='mr2 sans-serif'> Value: </label>
            <input type="text" class='ba h2 b--light-gray code' id="newValue"/>
            <button class='ml2 w4 h2 bg-near-white ba sans-serif' onclick=${onClick}>Add Query</button>
          </li>
`
  function onClick (e) {
    var newKey = document.getElementById('newKey').value
    var newValue = document.getElementById('newValue').value
    emit('queryChange', null, 'insert', newKey, newValue)
  }
}
