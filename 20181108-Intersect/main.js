function intersect(...arrays) {
  const countValues = {}

  arrays.forEach(array => {
    const uniqueValues = {}
    array.forEach(value => uniqueValues[value] = 1)
    for (const value in uniqueValues) {
      countValues[value] ? countValues[value]++ : countValues[value] = 1
    }
  })

  return Object.entries(countValues).reduce((cum, next) => next[1] === arrays.length ? cum.concat(next[0]) : cum, [])
}
