function howManyServings(params) {
  const { recipe, inventory } = params;
  let servings = [];

  if (!recipe || !inventory) {
    throw new Error('Recipe or Inventory object is expected');
  }

  for (let ingredient in recipe) {
    if (typeof ingredient !== 'string' || !isNaN(ingredient)) {
      throw new TypeError('Ingredient name should be a string');
    }
    if (isNaN(recipe[ingredient]) || !Number.isInteger(recipe[ingredient])) {
      throw new TypeError('Ingredient is not an integer');
    }
    // If the ingredient in the recipe is less than or greater than 0, we can skip
    if (recipe[ingredient] <= 0) {
      continue;
    }
    if (!inventory[ingredient]) {
      return 0;
    }
    if (isNaN(inventory[ingredient]) || !Number.isInteger(inventory[ingredient])) {
      throw new TypeError('Ingredient is not an integer');
    }
    if (inventory[ingredient] <= 0) {
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