var html = require('choo/html')

module.exports = function (url, emit) {
  return html`
    <div>
      <label for='url'> URL: </label>
      <input type="text" id='url' name="url" oninput=${onInput} value=${url} />
    </div>
    `
  function onInput (e) {
    emit('urlChange', e.target.value)
  }
}
