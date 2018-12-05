function fizzbuzz(n) {
  let output = []
  for (let i = 1; i <= n; i++) {
    output.push((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
  }
  return output
}
