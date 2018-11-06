function hibachi(n) {
  return n <= 3
    ? 2
    : hibachi(n - 1) * hibachi(n - 2) * hibachi (n - 3)
}

const $input = document.getElementById('input-n')
const $submit = document.getElementById('submit')
const $output = document.getElementById('output')

$submit.addEventListener('click', () => {
  $output.textContent = hibachi($input.value)
})
