module.exports = function (state, emitter) {
  state.url = ''

  emitter.on('urlChange', function (url) {
    if (url) {
      var protocolSplit = url.split('://')
      var protocol = protocolSplit[0]
      var hostnameSplit = protocolSplit[1].split('/')
      var hostname = hostnameSplit[0]
      var pathSplit = url.split(hostnameSplit[0])
      var path = pathSplit[1].split('?')[0]
      var querystringSplit = url.split('?')
      var query = (querystringSplit[1])
        ? querystringSplit[1].split('&').map(function (query) {
          var keyValue = query.split('=')
          return {key: keyValue[0], value: keyValue[1]}
        }) : []

      emitter.emit('protocolChange', protocol)
      emitter.emit('hostChange', hostname)
      emitter.emit('pathChange', path)
      emitter.emit('queryChange', query)
    } else {
      var querystring = (state.querystring.length > 0)
        ? '?' + state.querystring.reduce(function (acc, curr, i) {
          return (i === 0) ? `${curr.key}=${curr.value}` : `${acc}&${curr.key}=${curr.value || ''}`
        }, '') : ''

      state.url = state.protocol + '://' + state.host + state.path + querystring
    }
    emitter.emit('render')
  })
}
