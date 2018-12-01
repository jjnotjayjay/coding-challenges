function rot13(message){
  const extendedAlphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'
  let output = ''

  for (let char of message) {
    let charIndex = extendedAlphabet.indexOf(char)
    if (charIndex !== -1) {
      output += extendedAlphabet.charAt(charIndex + 13)
    }
    else {
      output += char
    }
  }

  return output
}
