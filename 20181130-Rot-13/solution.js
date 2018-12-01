function rot13(message){
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let output = ''

  for (let char of message) {
    let lowerCharIndex = lowerAlphabet.indexOf(char)
    let upperCharIndex = upperAlphabet.indexOf(char)

    if (lowerCharIndex !== -1) {
      output += lowerAlphabet.charAt((lowerCharIndex + 13) % 26)
    }
    else if (upperCharIndex !== -1) {
      output += upperAlphabet.charAt((upperCharIndex + 13) % 26)
    }
    else {
      output += char
    }
  }

  return output
}
