var html = require('choo/html')
var css = require('sheetify')
var queryStrings = require('./queryStrings')
var newQuery = require('./newQuery')

css('tachyons')

module.exports = function (protocol, host, path, query, emit) {
  return html`
    <div class='flex flex-column w-60'>
      <ul class='list'>
        <li class='mb3'>
          <label for='protocol' class='dib w-20'> Protocol: </label>
          <input id='protocol' type="text" oninput=${onInput} value=${protocol} />
        </li>
        <li class='mb3'>
          <label for='host' class='dib w-20'> Hostname: </label>
          <input id='host' type="text" oninput=${onInput} value=${host} />
        </li>
        <li class='mb3'>
          <label for='path' class='dib w-20'> Path: </label>
          <input id='path' type="text" oninput=${onInput} value=${path} />
        </li>
        ${query.map(function (query, i) { return queryStrings(query, i, emit) })}
        ${newQuery(emit)}
      </ul>
    </div>
    `

  function onInput (e) {
    emit(`${e.target.id}Change`, e.target.value)
  }
}
