module.exports = function (state, emitter) {
  state.protocol = ''
  emitter.on('protocolChange', function (protocol) {
    state.protocol = protocol
    emitter.emit('urlChange')
    emitter.emit('render')
  })
}
