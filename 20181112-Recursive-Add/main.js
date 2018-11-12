function recursiveAdd(n) {
  if (n === 0) return n
  return n + recursiveAdd(n - 1)
}

function arithmeticAdd(n) {
  let output = 0
  for (let i = 1; i <= n; i++) {
    output += i
  }
  return output
}

const $input = document.getElementById('user-input')
const $submit = document.getElementById('submit')
const $output = document.getElementById('output')

$submit.addEventListener('click', () => {
  $output.textContent = arithmeticAdd($input.valueAsNumber)
})
