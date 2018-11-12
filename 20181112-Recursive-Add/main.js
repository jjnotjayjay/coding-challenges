function recursiveAdd(n) {
  if (n === 0) return n
  return n + recursiveAdd(n - 1)
}

const $input = document.getElementById('user-input')
const $submit = document.getElementById('submit')
const $output = document.getElementById('output')

$submit.addEventListener('click', () => {
  $output.textContent = recursiveAdd($input.valueAsNumber)
})
