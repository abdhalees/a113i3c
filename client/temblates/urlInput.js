var html = require('choo/html')
var css = require('sheetify')

css('tachyons')

module.exports = function (url, emit) {
  return html`
    <li class='flex justify-center w-100 mt6 mb5'>
      <input
         type="text"
         placeholder='Enter URL Here ...'
         id='url' name="url"
         oninput=${onInput}
         class='w-60'
         value=${url}
        />
    </li>
    `
  function onInput (e) {
    emit('urlChange', e.target.value)
  }
}
