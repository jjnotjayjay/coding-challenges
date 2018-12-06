function duplicateEncode(word){
  const letterCounts = {}
  for (let i = 0; i < word.length; i++) {
    let letter = word.charAt(i).toLowerCase()
    letterCounts[letter]
      ? letterCounts[letter]++
      : letterCounts[letter] = 1
  }
  let output = ''
  for (let i = 0; i < word.length; i++) {
    let letter = word.charAt(i).toLowerCase()
    letterCounts[letter] > 1
      ? output += ')'
      : output += '('
  }
  return output
}
