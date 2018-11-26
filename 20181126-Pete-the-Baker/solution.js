function cakes(recipe, available) {
  return Object.keys(recipe).reduce((maxCakes, ingredient) => {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient]) || 0, maxCakes)
  }, Infinity)
}
