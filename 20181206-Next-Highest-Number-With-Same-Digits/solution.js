function nextBigger(n) {
  let number = n.toString()
  if (number.length === 1) return -1
  let digits = []

  for (let i = number.length - 1; i > 0; i--) {
    digits.push(number[i])
    if (Math.max(...digits) > number[i - 1]) {
      digits.push(number[i - 1])
      digits.sort()

      for (let j = 0; j < digits.length; j++) {
        if (digits[j] > number[i - 1]) {
          let outputNumber = number.slice(0, i - 1)
          outputNumber += digits.splice(j, 1)
          while (digits.length) {
            outputNumber += digits.shift()
          }
          return parseInt(outputNumber)
        }
      }
    }
  }

  return -1
}
