var html = require('choo/html')
var css = require('sheetify')

css('tachyons')

module.exports = function (url, emit) {
  return html`
    <li class='flex w-100 mt4 mb3 ml4'>
      <input
         type="text"
         placeholder='Enter URL Here ...'
         id='url' name="url"
         oninput=${onInput}
         class='w-60 ba b--light-gray h2 blue code'
         value=${url}
        />
    </li>
    `
  function onInput (e) {
    emit('urlChange', e.target.value)
  }
}
