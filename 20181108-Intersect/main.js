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

console.log(intersect(['foo', 'bar', 29, 1, 38, 19, 249], ['foo', 38, 2, 19, 3, 20], [1,2,3,4,38,'foo', 38, 19]))
