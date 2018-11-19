function formatDuration (inputSeconds) {
  if (inputSeconds === 0) return 'now'
  const year = Math.floor(inputSeconds / 31536000)
  const day = Math.floor((inputSeconds - year * 31536000) / 86400)
  const hour = Math.floor((inputSeconds - year * 31536000 - day * 86400) / 3600)
  const minute = Math.floor((inputSeconds - year * 31536000 - day * 86400 - hour * 3600) / 60)
  const second = inputSeconds - year * 31536000 - day * 86400 - hour * 3600 - minute * 60

  const lengths = Object.entries({ year, day, hour, minute, second }).filter(el => el[1] !== 0)
  lengths.forEach(el => el[1] > 1 ? el[0] += 's' : null)

  return renderLengths(lengths)
}

function renderLengths(lengths) {
  if (lengths.length === 1) {
    return lengths[0][1] + ' ' + lengths[0][0]
  }

  else if (lengths.length === 2) {
    return lengths[0][1] + ' ' + lengths[0][0] + ' and ' + lengths[1][1] + ' ' + lengths[1][0]
  }

  else if (lengths.length > 2) {
    return lengths[0][1] + ' ' + lengths[0][0] + ', ' + renderLengths(lengths.slice(1))
  }
}
