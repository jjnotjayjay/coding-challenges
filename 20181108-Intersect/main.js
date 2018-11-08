function intersect(...arrays) {
  const countValues = {}

  arrays.forEach(array => {
    const uniqueValues = {}
    array.forEach(value => uniqueValues[value] = 1)
    for (const value in uniqueValues) {
      countValues[value] ? countValues[value]++ : countValues[value] = 1
    }
  })

  const counts = Object.entries(countValues)
  return counts.filter(el => el[1] === arrays.length).reduce((cum, next) => cum.concat(next[0]), [])
}
