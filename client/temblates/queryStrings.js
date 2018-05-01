var html = require('choo/html')

module.exports = function (query, i, emit) {
  return html`
    <div>
      <label for='query${i}'> Query Parameter ${i + 1}</label>
      <div id='query${i}'>
        <input type="text" name='key' oninput=${onInput} value=${query.key} />
        <input type="text" name='value' oninput=${onInput} value=${query.value} />
        <button name='delete' onclick=${onClick}> Remove query</button>
      </div>
    </div>
    `

  function onInput (e) {
    emit('queryChange', null, e.target.name, i, e.target.value)
  }
  function onClick (e) {
    emit('queryChange', null, e.target.name, i)
  }
}
