var html = require('choo/html')
var css = require('sheetify')

css('tachyons')

module.exports = function (query, i, emit) {
  return html`
     <li class='mb3'>
      <label for='query${i}' class='dib w-20 mb2'> Query Parameter ${i + 1}:</label>
      <div id='query${i}'>
        <label for=${query.key} class='dib w-20'> Key: </label>
        <input type="text" id=${query.key} class='mr2' name='key' oninput=${onInput} value=${query.key || ''} />
        <label for=${query.value}${i} class='mr2'> Value: </label>
        <input type="text" id=${query.value}${i} name='value' oninput=${onInput} value=${query.value || ''} />
        <button name='delete' class='ml2 bg-light-red' onclick=${onClick}> Remove Query</button>
      </li>
    `

  function onInput (e) {
    emit('queryChange', null, e.target.name, i, e.target.value)
  }
  function onClick (e) {
    emit('queryChange', null, e.target.name, i)
  }
}
