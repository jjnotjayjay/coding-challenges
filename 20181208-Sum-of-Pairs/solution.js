var sum_pairs=function(ints, s){
  for (let j = 1; j < ints.length; j++) {
    for (let i = 0; i < j; i++) {
      if (ints[i] + ints[j] === s) {
        return [ints[i], ints[j]]
      }
    }
  }
  return undefined
}
