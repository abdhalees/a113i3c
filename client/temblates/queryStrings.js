var html = require('choo/html')
var css = require('sheetify')

css('tachyons')

var fontSize = css`
  :host {
    font-size: 1rem;
    font-weight: 500;
  }
`

var weight = css`
    :host {
      width: 21%;
    }
`
module.exports = function (query, i, emit) {
  return html`
     <li class='mb2 flex'>
       <div class= 'flex flex-column ${weight}'>
        <label for=${query.key} class='dib w-20 sans-serif mid-gray'> Key: </label>
        <input type="text" id=${query.key} class='mr2 pl2 h2 ba b--light-gray sans-serif' name='key' oninput=${onInput} value=${query.key || ''} />
      </div>
      <div class= 'flex flex-column ${weight}'>
        <label for=${query.value}${i} class='mr2 sans-serif mid-gray'> Value: </label>
        <input type="text" id=${query.value}${i} class='mr2 pl2 h2 ba b--light-gray sans-serif' name='value' oninput=${onInput} value=${query.value || ''} />
      </div>
        <button name='delete' class='w4 mt3 h2 bg-mid-gray near-white ba sans-serif ${fontSize}' onclick=${onClick}> Remove Query</button>
      </li>
    `

  function onInput (e) {
    emit('queryChange', null, e.target.name, i, e.target.value)
  }
  function onClick (e) {
    emit('queryChange', null, e.target.name, i)
  }
}
