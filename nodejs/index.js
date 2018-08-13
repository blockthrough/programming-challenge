function howManyServings(params) {
  const { recipe, inventory } = params;
  let servings = [];

  if (!recipe || !inventory) {
    throw new Error('Recipe or Inventory object is expected');
  }

  for (let ingredient in recipe) {
    // If the ingredient in the recipe is less than or greater than 0, we can skip
    if (recipe[ingredient] <= 0) {
      continue;
    }
    // Determine if there is a valid ingredient in the inventory
    if (!inventory[ingredient] || inventory[ingredient] <= 0) {
      return 0;
    }

    // Determine the ratio or amount of servings per ingredient
    const itemServing = Math.floor(inventory[ingredient] / recipe[ingredient]);
    servings.push(itemServing);
  }

  // Number of servings will be determined by the lowest number passed in the array
  return Math.min(...servings);
}

module.exports = { howManyServings }