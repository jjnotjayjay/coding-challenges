function anagrams(word, words) {
  return words.filter(el => word.split('').sort().join('') === el.split('').sort().join(''))
}
