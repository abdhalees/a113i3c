var html = require('choo/html')
var css = require('sheetify')

css('tachyons')

module.exports = function (query, i, emit) {
  return html`
     <li class='mb3'>
      <label for='query${i}' class='dib w-20  sans-serif'> Query Parameter ${i + 1}:</label>
      <div id='query${i}'>
        <label for=${query.key} class='dib w-20 sans-serif'> Key: </label>
        <input type="text" id=${query.key} class='mr2 h2 code' name='key' oninput=${onInput} value=${query.key || ''} />
        <label for=${query.value}${i} class='mr2 sans-serif'> Value: </label>
        <input type="text" id=${query.value}${i} class='h2 code' name='value' oninput=${onInput} value=${query.value || ''} />
        <button name='delete' class='ml2 w4 h2 bg-moon-gray ba sans-serif' onclick=${onClick}> Remove Query</button>
      </li>
    `

  function onInput (e) {
    emit('queryChange', null, e.target.name, i, e.target.value)
  }
  function onClick (e) {
    emit('queryChange', null, e.target.name, i)
  }
}
