module.exports = function (state, emitter) {
  state.querystring = []
  emitter.on('queryChange', function (queryString, type, key, value) {
    if (queryString !== null) state.querystring = queryString
    else if (type === 'delete') state.querystring.splice(key, 1)
    else if (type === 'insert') state.querystring.push({key, value})
    else {
      state.querystring = state.querystring.map(function (query, i) {
        if (i === key && type === 'key') return {key: value, value: query.value}
        if (i === key && type === 'value') return {key: query.key, value: value}
        return query
      })
    }

    emitter.emit('urlChange')
    emitter.emit('render')
  })
}
