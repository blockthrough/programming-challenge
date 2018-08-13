function howManyServings(params) {
  const { recipe, inventory } = params;
  let servings = [];


  for (let ingredient in recipe) {
    // Determine the ratio or amount of servings per ingredient
    const itemServing = Math.floor(inventory[ingredient] / recipe[ingredient]);
    servings.push(itemServing);
  }

  // Number of servings will be determined by the lowest number passed in the array
  return Math.min(...servings);
}

module.exports = { howManyServings }