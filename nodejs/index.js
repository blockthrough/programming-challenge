function howManyServings (params) {
  const {recipe, inventory} = params

  var currentMin = Number.POSITIVE_INFINITY;
  for(var key in recipe) {
    if (recipe[key] >= 0 && key in inventory && inventory[key] >= 0) {
      currentMin = Math.min(currentMin, inventory[key] / recipe[key]);
    } else {
      return 0;
    }
  }
  return currentMin
}

module.exports = {howManyServings}