function recursiveAdd(n) {
  if (n === 0) return n
  return n + recursiveAdd(n - 1)
}
