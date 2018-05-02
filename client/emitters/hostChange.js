module.exports = function (state, emitter) {
  state.host = ''
  emitter.on('hostChange', function (host) {
    state.host = host
    emitter.emit('urlChange')
  })
}
