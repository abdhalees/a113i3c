module.exports = function (state, emitter) {
  state.path = ''
  emitter.on('pathChange', function (path) {
    state.path = path
    emitter.emit('urlChange')
  })
}
