var sum_pairs=function(ints, s){
  let nums = {}
  for (let j = 1; j < ints.length; j++) {
    nums[ints[j - 1]] = true
    if (nums[s - ints[j]]) {
      return [s - ints[j], ints[j]]
    }
  }
  return undefined
}
