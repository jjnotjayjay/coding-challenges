function closestPoints(k, points) {
  return points.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1])).slice(0, k)
}

console.log(closestPoints(2, [[-2, 4], [0, -2], [-1, 0], [3, 5], [-2, -3], [3, 2]]))
