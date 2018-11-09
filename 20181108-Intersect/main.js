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

function splitTextAndFindIntersection(...texts) {
  const arrays = texts.reduce((cum, next) => {
    if (next.trim()) {
      cum.push(next.split(' '))
    }
    return cum
  }, [])
  return intersect(...arrays)
}

const $array1 = document.getElementById('array-1')
const $array2 = document.getElementById('array-2')
const $array3 = document.getElementById('array-3')
const $array4 = document.getElementById('array-4')
const $array5 = document.getElementById('array-5')
const $submit = document.getElementById('submit')
const $intersection = document.getElementById('intersection-values')

$submit.addEventListener('click', () => {
    $intersection.textContent = splitTextAndFindIntersection($array1.value, $array2.value, $array3.value, $array4.value, $array5.value)
})
