function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds - (hours * 3600)) / 60)
  let _seconds = seconds % 60

  function padTwo(input) {
    return ('00' + input).slice(-2)
  }

  return padTwo(hours) + ':' + padTwo(minutes) + ':' + padTwo(_seconds)
}
