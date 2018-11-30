function anagrams(word, words) {
  const sortedWord = word.split('').sort().join('')
  return words.filter(el => sortedWord === el.split('').sort().join(''))
}
