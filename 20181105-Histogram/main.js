function generateHistogram(text) {
  const letterCounts = {}
  for (let i = 0; i < text.length; i++) {
    const letter = text.charAt(i)
    letterCounts[letter] ? letterCounts[letter]++ : letterCounts[letter] = 1
  }

  const letterCountsArray = Object
    .entries(letterCounts)
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1
      }
      else {
        return a[1] < b[1] ? 1 : -1
      }
    })

  let output = ''
  letterCountsArray.forEach(letter => {
    output += letter[0] + ': ' + ('#'.repeat(letter[1])) + '\n'
  })
  return output
}

const $input = document.getElementById('text-input')
const $button = document.getElementById('submit')
const $output = document.getElementById('text-output')

$button.addEventListener('click', () => $output.textContent = generateHistogram($input.value))
