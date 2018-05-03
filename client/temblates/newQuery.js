var html = require('choo/html')
var css = require('sheetify')

css('tachyons')

var fontSize = css`
  :host {
    font-size: 1rem;
    font-weight: 500;
  }
`
module.exports = function (emit) {
  return html`
          <div>
          <label class='sans-serif mid-gray'> Query: </label>
          <li class='mv2'>
            <input type="text" placeholder='Key:' id="newKey" class='mr2 pl2 w-20 h2 ba b--light-gray sans-serif'/>
            <input type="text" placeholder='Value:' class='ba h2 w-20 pl2 b--light-gray sans-serif' id="newValue"/>
            <button class='ml2 h2 w4 bg-near-white ba sans-serif ${fontSize}' onclick=${onClick}>Add Query</button>
          </li>
`
  function onClick (e) {
    var newKey = document.getElementById('newKey').value
    var newValue = document.getElementById('newValue').value
    emit('queryChange', null, 'insert', newKey, newValue)
  }
}
