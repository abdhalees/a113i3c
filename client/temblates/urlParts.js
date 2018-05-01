var html = require('choo/html')
var queryStrings = require('./queryStrings')

module.exports = function (protocol, host, path, query, emit) {
  return html`
    <div>
      <label for='protocol'> Protocol: </label>
      <input id='protocol' type="text" oninput=${onInput} value=${protocol} />
      <label for='host'> Hostname: </label>
      <input id='host' type="text" oninput=${onInput} value=${host} />
      <label for='path'> Path: </label>
      <input id='path' type="text" oninput=${onInput} value=${path} />
      ${query.map(function (query, i) { return queryStrings(query, i, emit) })}
      <label for='newKey'> Key: </label>
      <input type="text" id="newKey"/>
      <label for='newValue'> Value: </label>
      <input type="text" id="newValue"/>
      <button onclick=${onClick}>Add Query</button>
    </div>
    `
  function onInput (e) {
    emit(`${e.target.id}Change`, e.target.value)
  }

  function onClick (e) {
    var newKey = document.getElementById('newKey').value
    var newValue = document.getElementById('newValue').value
    emit('queryChange', null, 'insert', newKey, newValue)
  }
}
