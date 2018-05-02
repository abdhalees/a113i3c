var html = require('choo/html')
var css = require('sheetify')

css('tachyons')

module.exports = function (emit) {
  return html`
          <li class='mb3'>
            <label for='newKey' class='dib w-20'> Key: </label>
            <input type="text" id="newKey" class='mr2'/>
            <label for='newValue' class='mr2'> Value: </label>
            <input type="text" id="newValue"/>
            <button class='ml2 bg-lightest-blue' onclick=${onClick}>Add Query</button>
          </li>
`
  function onClick (e) {
    var newKey = document.getElementById('newKey').value
    var newValue = document.getElementById('newValue').value
    emit('queryChange', null, 'insert', newKey, newValue)
  }
}
