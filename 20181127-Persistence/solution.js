function persistence(num) {
  let count = 0
  let currentNumber = num.toString()
  while (currentNumber.split('').length > 1) {
    currentNumber = currentNumber.split('').reduce((a, b) => a * b).toString()
    count++
  }
  return count
}
