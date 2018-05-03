var html = require('choo/html')
var css = require('sheetify')

css('tachyons')

module.exports = function (url, emit) {
  return html`
    <li class='flex w-100 mt4 mb2 ml4'>
      <input
         type="text"
         placeholder='Enter URL Here ...'
         id='url' name="url"
         oninput=${onInput}
         class='w-60 pl2 ba b--light-gray h2 blue sans-serif'
         value=${url}
        />
    </li>
    `
  function onInput (e) {
    emit('urlChange', e.target.value)
  }
}
