function cakes(recipe, available) {
  return Object.keys(recipe).reduce((maxCakes, ingredient) => {
    return available[ingredient]
      ? Math.min(maxCakes, Math.floor(available[ingredient] / recipe[ingredient]))
      : 0
  }, Infinity)
}
