function firstNonRepeatingLetter(s) {
  let letters = s.split('')
  while (letters.length) {
    let noRepeatedLetters = letters.slice(1).filter(char => char.toLowerCase() !== letters[0].toLowerCase())
    if (noRepeatedLetters.length + 1 === letters.length) {
      return letters[0]
    }
    else {
      letters = noRepeatedLetters
    }
  }
  return ''
}
