function sumStrings(a,b) {
  const aDigits = a.split('')
  const bDigits = b.split('')
  const sumDigits = []
  let carry = 0

  while (aDigits.length || bDigits.length) {
    let sum = (parseInt(aDigits.pop()) || 0) + (parseInt(bDigits.pop()) || 0) + carry
    sumDigits.unshift(sum % 10)
    sum >= 10
      ? carry = 1
      : carry = 0
  }
  if (carry) sumDigits.unshift(1)

  return sumDigits.join('').replace(/^0+/g, '')
}
