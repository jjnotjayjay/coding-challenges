function productFib(prod){
  const fib = [0, 1]
  let i = 1

  while (fib[i] * fib[i - 1] < prod) {
    fib.push(fib[i] + fib[i - 1])
    i++
  }

  return [fib[i - 1], fib[i], fib[i] * fib[i - 1] === prod]
}
