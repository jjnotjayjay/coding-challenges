function score(dice) {
  const tripleScores = { 1: 1000, 6: 600, 5: 500, 4: 400, 3: 300, 2: 200 }
  const counts = {}
  let scoreOutput = 0

  dice.forEach(el => counts[el] ? counts[el]++ : counts[el] = 1)

  for (const value in counts) {
    if (counts[value] >= 3) {
      scoreOutput += tripleScores[value]
      counts[value] -= 3
    }
    if (value == 1) {
      scoreOutput += counts[value] * 100
    }
    if (value == 5) {
      scoreOutput += counts[value] * 50
    }
  }

  return scoreOutput
}
