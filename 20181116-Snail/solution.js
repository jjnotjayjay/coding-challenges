function snail(array) {
  let n = array[0].length
  const snailTrail = []
  let row = 0
  let col = 0

  while (n > 0) {
    for (let i = 0; i < n; i++) {
      snailTrail.push(array[row][col])
      col++
    }
    col--
    n--
    for (let i = 0; i < n; i++) {
      row++
      snailTrail.push(array[row][col])
    }
    for (let i = 0; i < n; i++) {
      col--
      snailTrail.push(array[row][col])
    }
    n--
    for (let i = 0; i < n; i++) {
      row--
      snailTrail.push(array[row][col])
    }
    col++
  }
  return snailTrail
}
